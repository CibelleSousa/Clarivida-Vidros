/**
 * Define a estrutura de uma única peça retangular a ser cortada.
 */
export interface IPeca {
    id: string;      // Um identificador único, como "A", "B", etc.
    largura: number;
    altura: number;
}

/**
 * Define a estrutura de uma peça que já foi alocada na chapa de vidro.
 */
export interface ILayoutItem {
    peca: IPeca;
    x: number;      // Posição no eixo X
    y: number;      // Posição no eixo Y (comprimento)
    rotacionada: boolean // Guarda a informação se a peça foi rotacionada
}

/**
 * Define a estrutura de um Estado para o problema de corte.
 * Um estado representa o progresso do plano de corte em um determinado momento.
 */
export interface IEstado {
    pecasRestantes: IPeca[];
    layout: ILayoutItem[];

    /**
     * Retorna uma representação em string única do estado.
     * Essencial para uso em estruturas de dados como Set para evitar loops.
     * @returns Uma string formatada que representa o layout atual.
     */
    toString(): string;
}