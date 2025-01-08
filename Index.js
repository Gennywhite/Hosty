// Importazione dei moduli necessari
const express = require('express');
const cors = require('cors');

// Creazione dell'app Express
const app = express();

// Configurazione di CORS per consentire richieste da qualsiasi origine
app.use(cors());

// Middleware per il parsing del corpo delle richieste in formato JSON
app.use(express.json());

// Definizione di una semplice route GET sulla root '/'
app.get('/', (req, res) => {
  res.send('Benvenuto nel server Node.js con Express!');
});

// Definizione di una route API di esempio
app.get('/api/example', (req, res) => {
  res.json({ message: 'Questa è una risposta dall\'API!' });
});

// Avvio del server sulla porta 3000 o su una porta specificata dall'ambiente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
