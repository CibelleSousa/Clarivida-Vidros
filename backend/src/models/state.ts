import { IEstado, IPeca, ILayoutItem } from "../types/state.types";

/**
 * Implementa a lógica para um estado do problema de corte.
 */
export class Estado implements IEstado {
    public pecasRestantes: IPeca[];
    public layout: ILayoutItem[];

    /**
     * Cria uma nova instância de um Estado de corte.
     * @param pecasRestantes A lista de peças que ainda precisam ser alocadas.
     * @param layout O layout atual com as peças já alocadas na chapa.
     */
    constructor(pecasRestantes: IPeca[], layout: ILayoutItem[] = []) {
        this.pecasRestantes = pecasRestantes;
        this.layout = layout;
    }

    /**
     * Cria uma string única que representa o layout atual.
     * Isso é crucial para que a lista de "nós fechados" funcione corretamente.
     * A string é criada ordenando as peças pela posição para garantir consistência.
     */
    public toString(): string {
        const sortedLayout = [...this.layout].sort((a, b) => {
            if (a.y !== b.y) return a.y - b.y;
            return a.x - b.x;
        });
        return sortedLayout.map(item => `${item.peca.id}@(${item.x},${item.y})`).join('|');
    }
}