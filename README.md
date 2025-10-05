# Clarivida Vidros - Atividade 1 (Inteligência Artificial)

## 📄 1. Descrição do Projeto

Este projeto implementa uma solução para o **Problema de Corte de Chapa (2D Cutting Stock Problem)**, com o objetivo de minimizar o desperdício de material (comprimento da chapa) em um cenário aplicado à Indústria 4.0. A aplicação foi desenvolvida no contexto de uma indústria de vidros fictícia, a "Clarivida", que precisa otimizar seus planos de corte para atender a pedidos de peças retangulares customizadas.

A solução utiliza o algoritmo de busca heurística **A*** para explorar o espaço de estados e encontrar um layout de corte ótimo. A implementação é capaz de considerar a **rotação de peças (90 graus)** e utiliza uma heurística de custo híbrida (considerando a área restante e a altura da maior peça) para guiar a busca de forma eficiente.

## 🎓 2. Contexto Acadêmico

Este repositório contém o desenvolvimento do Trabalho 1 da disciplina de Inteligência Artificial, do curso de Ciência da Computação da Universidade Estadual de Santa Cruz (UESC).

## 🏗️ 3. Arquitetura do Projeto

O projeto está organizado em uma arquitetura de **monorepo**, separando claramente as responsabilidades do Back-end e do Front-end para facilitar o desenvolvimento e a manutenção.

* **🖥️ Back-end (`/backend`):** Aplicação Node.js desenvolvida com TypeScript e o framework Express.js. É responsável por toda a lógica de busca, cálculos de heurística e por expor os resultados através de uma API REST.
* **🌐 Front-end (`/frontend`):** Aplicação Angular, que será responsável por consumir a API do back-end e apresentar uma interface gráfica amigável para o usuário interagir com o sistema.

## ⚙️ 4. Funcionalidades do Back-end

-   Resolução do Problema de Corte 2D para peças retangulares.
-   Implementação do algoritmo de busca heurística **A***.
-   Suporte para **rotação de peças** para encontrar melhores encaixes.
-   Heurística de custo (`h(n)`) híbrida para uma busca mais inteligente.
-   API REST com endpoints para listar e executar casos de teste pré-definidos.

## 🚀 5. Como Executar (Back-end)

### Pré-requisitos

* Node.js (v18+ recomendado)
* npm (geralmente instalado com o Node.js)

### Instalação

1.  Clone o repositório.
2.  Navegue até a pasta do back-end:
    ```bash
    cd backend
    ```
3.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

### Executando em Modo de Desenvolvimento

1.  Dentro da pasta `backend`, execute o comando:
    ```bash
    npm run dev
    ```
2.  O servidor será iniciado e estará rodando em `http://localhost:3000`.

## 🔌 6. Documentação da API

### `GET /api/casos-de-teste`

Retorna uma lista com os nomes de todos os casos de teste pré-definidos disponíveis para execução.

* **Método:** `GET`
* **Resposta de Sucesso (200 OK):**
    ```json
    [
      "Caso de Teste 1: Encaixe Básico",
      "Caso de Teste 2: Encaixe Complexo (Original)",
      "Caso de Teste 3: Encaixe Perfeito (Tetris)",
      "Caso de Teste 4: Grande Quantidade de Peças Pequenas (Mosaico)",
	  "Caso de Teste 5: Mix de Peças Bem Variadas",
	  "Caso de Teste 6: Mosaico Complexo com Rotação"
    ]
    ```

### `POST /api/executar-teste`

Executa o algoritmo de busca para um caso de teste específico informado no corpo da requisição.

* **Método:** `POST`
* **Corpo da Requisição (Body):** `JSON`
    ```json
    {
      "nomeTeste": "Caso de Teste 2: Encaixe Complexo (Original)"
    }
    ```
* **Resposta de Sucesso (200 OK):** Retorna o objeto da solução, contendo o custo final e o plano de corte passo a passo.
    ```json
    {
      "custo": 8,
      "plano": [
        "- Passo 1: Colocar Peça A (2x8) na posição (x=0, y=0)",
        "- Passo 2: Colocar Peça B rotacionada com tamanho (2x8) na posição (x=8, y=0)",
        "- Passo 3: Colocar Peça C (5x5) na posição (x=0, y=2)",
        "- Passo 4: Colocar Peça D (3x6) na posição (x=5, y=2)"
      ]
    }
    ```
* **Resposta de Erro (404 Not Found):** Retornada se o `nomeTeste` enviado não for encontrado na lista de casos de teste.