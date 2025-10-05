import { IPeca } from "./state.types";

/**
 * Define a estrutura para nossos casos de teste.
 */
export interface ITestCase {
    nome: string;
    larguraChapa: number;
    pecas: IPeca[];
}