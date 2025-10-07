import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlanoDeCorteComponent } from '../plano-de-corte/plano-de-corte';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, PlanoDeCorteComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  casos: string[] = [];
  selectedCase: string = '';
  resultado: any = null; // ← adicione esta linha

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.carregarCasos();
  }

  carregarCasos() {
    this.http.get<string[]>('http://localhost:3000/api/casos-de-teste')
      .subscribe({
        next: dados => {
          this.casos = dados;
          this.selectedCase = this.casos[0] || '';
        },
        error: err => console.error('Erro ao carregar casos:', err)
      });
  }

  enviar() {
    if (!this.selectedCase) {
      alert('Selecione um caso antes de enviar');
      return;
    }

    this.http.post('http://localhost:3000/api/executar-teste', { nomeTeste: this.selectedCase })
      .subscribe({
        next: (res: any) => {
          this.resultado = res; // ← atualiza resultado para renderizar o plano
          // Se quiser redirecionar para outra rota, você pode usar router.navigate
          // this.router.navigate(['/plano'], { state: { resultado: res } });
        },
        error: err => {
          console.error('Erro ao executar teste:', err);
          alert('Erro ao executar teste, veja console');
        }
      });
  }
}
