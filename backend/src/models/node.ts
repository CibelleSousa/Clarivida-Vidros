import { Estado } from "./state";
import { IEstado, ILayoutItem, IPeca } from "../types/state.types";
import { INo } from "../types/node.types";

/**
 * Implementa um nó a ser usado no algoritmo de busca A* para o problema de corte.
 */
export class No implements INo {
    public aEstado: IEstado;
    public aNoPai: INo | null;
    public aCustoG: number;
    public aCustoH: number;
    public aCustoF: number;

    constructor(estado: IEstado, pai: INo | null, pCustoG: number, larguraChapa: number) {
        this.aEstado = estado;
        this.aNoPai = pai;
        this.aCustoG = pCustoG;

        this.aCustoH = this.calcularCustoH(estado, larguraChapa);
        this.aCustoF = this.aCustoG + this.aCustoH;

    }

    /**
     * Calcula o custo heurístico (h) para um estado.
     * A heurística é a área total das peças restantes dividida pela largura da chapa,
     * dando uma estimativa otimista do comprimento mínimo ainda necessário.
     */
    private calcularCustoH(estado: IEstado, larguraChapa: number): number {
        // Se não há peças, o custo futuro é zero
        if (estado.pecasRestantes.length === 0) return 0;

        // Estimativa baseada na área
        if (larguraChapa === 0) return Infinity; // Evita divisão por zero
        const areaRestante = estado.pecasRestantes.reduce((soma, peca) => soma + (peca.largura * peca.altura), 0);
        const heuristicaArea = areaRestante / larguraChapa;

        // Estimativa baseada na peça mais alta que ainda resta
        const alturaMaximaRestante = estado.pecasRestantes.reduce((max, peca) => {
            const maiorDimensao = Math.max(peca.altura, peca.largura);
            return Math.max(max, maiorDimensao);
        }, 0);

        // A heurística final é o maior valor entre ambas estimativas
        return Math.max(heuristicaArea, alturaMaximaRestante);
    }

    /**
     * Verifica se a colocação de uma nova peça sobrepõe alguma peça existente no layout.
     * @param novaPeca O item de layout com a nova peça e sua posição.
     * @param layoutAtual A lista de peças já posicionadas.
     * @returns `true` se houver sobreposição, `false` caso contrário.
     */
    private sobreposto(novaPeca: ILayoutItem, layoutAtual: ILayoutItem[]): boolean {
        for (const item of layoutAtual) {
            const colisaoX = novaPeca.x < item.x + item.peca.largura && novaPeca.x + novaPeca.peca.largura > item.x;
            const colisaoY = novaPeca.y < item.y + item.peca.altura && novaPeca.y + novaPeca.peca.altura > item.y;
            if (colisaoX && colisaoY) {
                return true; // Sobreposição detectada
            }
        }
        return false;
    }

    /**
     * Gera todos os nós sucessores válidos a partir do estado atual.
     * @param larguraChapa A largura da chapa.
     * @returns `INo[]` Uma lista de nós.
     */
    public sucessores(larguraChapa: number): INo[] {
        const listaSucessores: INo[] = [];
        if (this.aEstado.pecasRestantes.length === 0) {
            return []; // Estado final, sem sucessores
        }

        const pecaParaAlocar = this.aEstado.pecasRestantes[0];
        const outrasPecas = this.aEstado.pecasRestantes.slice(1);
        const orientacoes = [{ largura: pecaParaAlocar.largura, altura: pecaParaAlocar.altura, rotacionada: false }];

        // Se a peça não for quadrada iremos considerar girá-la como uma opção para a solução
        if (pecaParaAlocar.largura !== pecaParaAlocar.altura) {
            orientacoes.push({ largura: pecaParaAlocar.altura, altura: pecaParaAlocar.largura, rotacionada: true });
        }

        for (const pecaOrientada of orientacoes) {
            // Define os pontos onde tentaremos encaixar a peça (tentar colocar nos "cantos" das peças existentes)
            const pontosDeTeste = [{ x: 0, y: 0 }];
            this.aEstado.layout.forEach(item => {
                pontosDeTeste.push({ x: item.x + item.peca.largura, y: item.y });
                pontosDeTeste.push({ x: item.x, y: item.y + item.peca.altura });
            });

            for (const ponto of pontosDeTeste) {
                if (ponto.x + pecaOrientada.largura > larguraChapa) {
                    continue; // Peça ultrapassa a largura da chapa
                }

                // Cria um item de layout temporário para o teste de sobreposição
                const layoutItemTest: ILayoutItem = {
                    peca: { id: pecaParaAlocar.id, ...pecaOrientada },
                    x: ponto.x,
                    y: ponto.y,
                    rotacionada: pecaOrientada.rotacionada
                };

                if (!this.sobreposto(layoutItemTest, this.aEstado.layout)) {
                    const novoLayout = [...this.aEstado.layout, layoutItemTest];

                    // Calcula o novo custo G (comprimento máximo usado)
                    const novoCustoG = novoLayout.reduce((max, item) => Math.max(max, item.y + item.peca.altura), 0);

                    const novoEstado = new Estado(outrasPecas, novoLayout);
                    listaSucessores.push(new No(novoEstado, this, novoCustoG, larguraChapa));
                }
            }

        }

        return listaSucessores;
    }
}