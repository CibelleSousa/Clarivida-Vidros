# Guia de Contribuição do Projeto

Para garantir a qualidade, a agilidade e a organização do nosso projeto,  um conjunto de diretrizes foram criadas para que facilitem a colaboração de toda a equipe.

Por favor, leia com atenção antes de começar.

## 🌳 Fluxo de Trabalho e Branches

A organização das branches é a base da nossa colaboração. Seguimos um fluxo simples para manter tudo funcionando perfeitamente.

#### A Branch `main` é a nossa fonte da verdade

* A branch `main` contém **apenas código estável e funcional**.
* **NUNCA** faça commits ou pushes diretos para a `main`. Todo código novo deve entrar na `main` através de um Pull Request aprovado.

#### Crie uma Branch para Cada Tarefa

* Qualquer nova funcionalidade, correção ou melhoria deve ser desenvolvida em sua própria branch.
* Sempre crie sua branch a partir da versão mais recente da `main`.

#### Padrão de Nomes para Branches

Use o seguinte padrão para nomear suas branches, o que nos ajuda a identificar rapidamente o propósito de cada uma:

* **Funcionalidades:** `feature/nome-da-funcionalidade` (ex: `feature/login-com-google`)
* **Correções de Bugs:** `fix/descricao-do-bug` (ex: `fix/corrige-botao-submit`)
* **Documentação:** `docs/atualiza-readme`
* **Melhorias:** `improvement/melhora-performance-queries`

**Exemplo de como começar:**
```bash
# Vá para a branch principal
git checkout main

# Garanta que ela está atualizada
git pull origin main

# Crie sua nova branch
git checkout -b feature/sua-nova-feature
```

## 💬 Padrão de Commits

Para manter nosso histórico de commits limpo, legível e consistente, adotamos o padrão **Conventional Commits** apenas para o **título** do commit.

A estrutura é: `<tipo>: <descrição>`

**Tipos mais comuns:**
* **`feat`**: Para novas funcionalidades.
* **`fix`**: Para correções de bugs.
* **`docs`**: Para mudanças na documentação.
* **`style`**: Para formatação de código (ponto e vírgula, espaçamento, etc.).
* **`refactor`**: Para refatoração de código que não altera a funcionalidade.
* **`test`**: Para adição ou modificação de testes.
* **`build`**: Para mudanças que afetam o sistema de build ou dependências.

**Exemplos de bons títulos de commit:**
* ✅ `feat: Adiciona sistema de autenticação via e-mail`
* ✅ `fix: Corrige cálculo de frete no carrinho de compras`
* ✅ `docs: Atualiza o guia de instalação no README`

**Exemplos de títulos ruins:**
* ❌ `Ajustes`
* ❌ `Consertei o bug`
* ❌ `Adicionando arquivos novos`

## 🚀 Pull Requests (PRs)

O Pull Request (PR) é onde a colaboração acontece. É o momento de revisar o código, discutir as mudanças e integrá-las ao projeto.

* **PRs Pequenos e Focados:** Cada PR deve resolver apenas um problema (uma Issue). PRs menores são mais fáceis e rápidos de revisar.
* **Descrição Clara:** Ao abrir um PR, um template aparecerá automaticamente na descrição. **Por favor, preencha-o com cuidado.** Ele ajuda os revisores a entenderem o que foi feito e como testar.
* **Associe a Issue:** Sempre vincule o PR à Issue correspondente.
* **Atribua Revisores:** Atribua pelo menos 1 ou 2 membros da equipe para revisar seu código.
* **Não Faça Merge Sozinho:** O autor do PR não deve ser a pessoa a aprová-lo e fazer o merge.

## 👀 Revisão de Código (Code Review)

A revisão é uma etapa crucial para garantir a qualidade do código e compartilhar conhecimento.

#### Para quem Revisa:
* **Seja Construtivo e Gentil:** O objetivo é melhorar o código, não criticar o colega. Em vez de "Isso está errado", tente "O que você acha de abordarmos desta forma? Acredito que traria tal benefício."
* **Revise o Mais Rápido Possível:** Não deixe um PR parado por dias. A agilidade do time depende disso.
* **Aprove com Confiança:** Só aprove um PR quando tiver certeza de que ele atende aos requisitos e não introduz novos problemas.

#### Para quem Recebe a Revisão:
* **Não Leve para o Lado Pessoal:** A revisão é sobre o código, não sobre você. Encare como uma oportunidade de aprendizado.
* **Responda a Todos os Comentários:** Explique suas decisões ou faça as alterações sugeridas. Marque os comentários como "resolvidos" após endereçá-los.

## 🎫 Gerenciamento com Issues

Usamos a aba "Issues" do GitHub para rastrear todo o nosso trabalho.

* **Uma Issue por Tarefa:** Antes de começar a codificar, verifique se existe uma Issue para a sua tarefa. Se não houver, crie uma.
* **Use Labels:** As etiquetas (labels) nos ajudam a organizar, filtrar e priorizar o trabalho.
* **Atribua a Si Mesmo:** Quando pegar uma tarefa, atribua a Issue a você mesmo (`assign yourself`) para que todos saibam quem está trabalhando em quê.

---
Obrigado por dedicar seu tempo para tornar nosso projeto ainda melhor!