import { IEstado } from "./state.types";

/**
 * Define a estrutura pública de um Nó para o problema de corte.
 */
export interface INo {
    aEstado: IEstado;
    aNoPai: INo | null;
    aCustoG: number;
    aCustoH: number;
    aCustoF: number;
    sucessores(larguraChapa: number): INo[];
}