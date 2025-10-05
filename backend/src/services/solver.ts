import { No } from "../models/node";
import { Estado } from "../models/state";
import { IEstado } from "../types/state.types";
import { INo } from "../types/node.types";

export function buscaAEstrela(estadoInicial: IEstado, larguraChapa: number): INo | null {
    const nosAbertos: INo[] = [];
    const nosFechados = new Set<string>();

    const noInicial = new No(estadoInicial, null, 0, larguraChapa);
    nosAbertos.push(noInicial);

    while (nosAbertos.length > 0) {
        nosAbertos.sort((a, b) => a.aCustoF - b.aCustoF);

        const noAtual = nosAbertos.shift()!;
        const estadoAtualStr = noAtual.aEstado.toString();

        if (nosFechados.has(estadoAtualStr)) continue;

        nosFechados.add(estadoAtualStr);

        if ((noAtual.aEstado as Estado).pecasRestantes.length === 0) {
            return noAtual;
        }

        const sucessores = noAtual.sucessores(larguraChapa);

        for (const sucessor of sucessores) {
            if (!nosFechados.has(sucessor.aEstado.toString())) {
                nosAbertos.push(sucessor);
            }
        }
    }
    return null;
}

export function reconstruirCaminho(noFinal: INo): { custo: number, plano: string[] } {
    const acoes: string[] = [];
    let noAtual: INo | null = noFinal;

    while (noAtual !== null && noAtual.aNoPai !== null) {
        const layoutAtual = (noAtual.aEstado as Estado).layout;
        const layoutPai = (noAtual.aNoPai.aEstado as Estado).layout;

        const pecaAdicionada = layoutAtual.find(itemAtual =>
            !layoutPai.some(itemPai => itemPai.peca.id === itemAtual.peca.id)
        );

        if (pecaAdicionada) {
            const { peca, x, y, rotacionada } = pecaAdicionada;
            const infoRotacao = rotacionada ? "rotacionada com tamanho" : "com tamanho";
            const acao = `Colocar Peça ${peca.id} ${infoRotacao} (${peca.largura}x${peca.altura}) na posição (x=${x}, y=${y})`;
            acoes.unshift(acao);
        }
        noAtual = noAtual.aNoPai;
    }

    return {
        custo: noFinal.aCustoG,
        plano: acoes.map((acao, index) => `- Passo ${index + 1}: ${acao}`)
    };
}