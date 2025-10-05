import { Request, Response } from "express";
import { Estado } from "../models/state";
import { buscaAEstrela, reconstruirCaminho } from "../services/solver";
import { casosDeTeste } from "../data/testCases";

export const getCasosDeTeste = (req: Request, res: Response) => {
    const nomeDosTestes = casosDeTeste.map(teste => teste.nome);
    res.json(nomeDosTestes);
};

export const executarTeste = (req: Request, res: Response) => {
    const { nomeTeste } = req.body as { nomeTeste: string };

    const casoTeste = casosDeTeste.find(teste => teste.nome === nomeTeste);

    if (!casoTeste) {
        return res.status(404).json({ error: `Caso de teste '${nomeTeste}' não encontrado.` });
    }

    const estadoInicial = new Estado(casoTeste.pecas);
    const noSolucao = buscaAEstrela(estadoInicial, casoTeste.larguraChapa);

    if (noSolucao) {
        const solucao = reconstruirCaminho(noSolucao);
        res.json(solucao);
    }
    else {
        res.status(404).json({ message: "Não foi encontrado uma solução para esse caso de teste." });
    }
};