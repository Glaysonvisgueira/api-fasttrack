const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

//Conectar ao cluster do MongoDB Atlas, popular com usuário e senha para acessar o banco de dados.
mongoose.connect('mongodb+srv://user:password@cluster0.r7qnp.mongodb.net/fasttrack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

//Servidor websocket
setupWebsocket(server);

//Configurar servidor para que ele entenda o padrão de comunicação JSON.
app.use(cors())
app.use(express.json());
app.use(routes);

//Escolha da porta localhost
server.listen(3333);
