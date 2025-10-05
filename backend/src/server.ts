import express from 'express';
import { getCasosDeTeste, executarTeste } from './controllers/cutController';

const app = express();
const PORT = 3000;

// Permite que o Express entenda requisições como JSON
app.use(express.json());

// Rota teste para verificar se o servidor está funcionando
app.get('/api/health', (req, res) => {
    res.json({ status: "Servidor da Clarivida Vidros no ar e saudável!" });
});

// Rota para obter a lista de testes
app.get('/api/casos-de-teste', getCasosDeTeste);

// Rota para executar o teste selecionado pelo usuário
app.post('/api/executar-teste', executarTeste);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor da Clarivida Vidros rodando em http://localhost:${PORT}`);
});