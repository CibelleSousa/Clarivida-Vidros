import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plano-de-corte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plano-de-corte.html',
  styleUrls: ['./plano-de-corte.css']
})
export class PlanoDeCorteComponent implements OnInit, OnChanges {
  @Input() largura: number = 0;
  @Input() altura: number = 0;
  @Input() plano: string[] = [];

  pecas: { x: number; y: number; w: number; h: number; cor: string; nome: string }[] = [];
  escala: number = 40;

  passoAtual: number = 0;  // controla até qual peça desenhar

  chapaLargura: number = 0;
  chapaAltura: number = 0;

  ngOnInit() {
    this.carregarPecas();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['plano'] || changes['largura'] || changes['altura']) {
      this.passoAtual = 0; // resetar passo ao receber novo plano
      this.carregarPecas();
    }
  }

  carregarPecas() {
    this.pecas = this.plano.map((p, i) => {
      const match = p.match(/Peça\s([\wÀ-ú]+).*?\((\d+)x(\d+)\).*?\(x=(\d+),\s*y=(\d+)\)/);
      if (match) {
        const [, nome, w, h, x, y] = match;
        return {
          nome,
          w: parseInt(w),
          h: parseInt(h),
          x: parseInt(x),
          y: parseInt(y),
          cor: `hsl(${i * 70}, 70%, 60%)`
        };
      }
      return null;
    }).filter(p => p !== null) as any;

    // Ajusta tamanho da chapa
    const maxX = Math.max(...this.pecas.map(p => p.x + p.w), this.largura);
    const maxY = Math.max(...this.pecas.map(p => p.y + p.h), this.altura);

    this.chapaLargura = maxX * this.escala;
    this.chapaAltura = maxY * this.escala;
  }

  proximoPasso() {
    if (this.passoAtual < this.pecas.length) {
      this.passoAtual++;
    }
  }
}
