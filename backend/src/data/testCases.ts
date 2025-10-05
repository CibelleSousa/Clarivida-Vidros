import { ITestCase } from "../types/testCases.types";

// Exporta um array com todos os casos de teste
export const casosDeTeste: ITestCase[] = [
    {
        nome: "Caso de Teste 1: Encaixe Básico",
        larguraChapa: 10,
        pecas: [
            { id: 'A', largura: 4, altura: 3 },
            { id: 'B', largura: 6, altura: 2 }
        ]
    },
    {
        nome: "Caso de Teste 2: Encaixe Complexo",
        larguraChapa: 10,
        pecas: [
            { id: 'A', largura: 2, altura: 8 },
            { id: 'B', largura: 8, altura: 2 },
            { id: 'C', largura: 5, altura: 5 },
            { id: 'D', largura: 3, altura: 6 }
        ]
    },
    // --- NOVOS CASOS DE TESTE ABAIXO ---
    {
        nome: "Caso de Teste 3: Encaixe Perfeito (Tetris)",
        larguraChapa: 10,
        pecas: [
            { id: 'A', largura: 10, altura: 2 },
            { id: 'B', largura: 5, altura: 3 },
            { id: 'C', largura: 5, altura: 3 }
        ]
    },
    {
        nome: "Caso de Teste 4: Grande Quantidade de Peças Pequenas (Mosaico)",
        larguraChapa: 10,
        pecas: [
            { id: 'P1', largura: 2, altura: 2 },
            { id: 'P2', largura: 2, altura: 2 },
            { id: 'P3', largura: 2, altura: 2 },
            { id: 'P4', largura: 2, altura: 2 },
            { id: 'P5', largura: 2, altura: 2 },
            { id: 'P6', largura: 2, altura: 2 },
            { id: 'P7', largura: 2, altura: 2 },
            { id: 'P8', largura: 2, altura: 2 },
            { id: 'P9', largura: 2, altura: 2 },
            { id: 'P10', largura: 2, altura: 2 },
        ]
    },
    {
        nome: "Caso de Teste 5: Mix de Peças Bem Variadas",
        larguraChapa: 10,
        pecas: [
            { id: 'A', largura: 1, altura: 9 },
            { id: 'B', largura: 9, altura: 1 },
            { id: 'C', largura: 5, altura: 5 },
            { id: 'D', largura: 4, altura: 4 },
            { id: 'E', largura: 3, altura: 3 },
        ]
    },
    {
        nome: "Caso de Teste 6: Mosaico Complexo com Rotação",
        larguraChapa: 10,
        pecas: [
            { id: 'A1', largura: 3, altura: 2 }, { id: 'A2', largura: 3, altura: 2 },
            { id: 'A3', largura: 3, altura: 2 }, { id: 'A4', largura: 3, altura: 2 },
            { id: 'B1', largura: 2, altura: 3 }, { id: 'B2', largura: 2, altura: 3 },
            { id: 'B3', largura: 2, altura: 3 }, { id: 'B4', largura: 2, altura: 3 },
        ]
    }
];