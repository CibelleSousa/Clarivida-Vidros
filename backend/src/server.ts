import express from 'express';
import cors from 'cors';
import { getCasosDeTeste, executarTeste } from './controllers/cutController';

const app = express();
const PORT = 3000;

// MIDDLEWARES

// Permite que o Express entenda requisições como JSON
app.use(express.json());

// Habilita CORS para todas as origens (para desenvolvimento)
app.use(cors());

// ROTAS

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({ status: "Servidor da Clarivida Vidros no ar e saudável!" });
});

// Rota para obter lista de casos de teste
app.get('/api/casos-de-teste', getCasosDeTeste);

// Rota para executar o teste selecionado
app.post('/api/executar-teste', executarTeste);

// INICIA O SERVIDOR

app.listen(PORT, () => {
  console.log(`Servidor da Clarivida Vidros rodando em http://localhost:${PORT}`);
});
