const socketio = require('socket.io');

let io;
const connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);
    io.on('connection', socket =>{
        console.log(socket.id);
        const {motorista, placa, marca, modelo, ano, cor} = socket.handshake.query;
        connections.push({
            id: socket.id,
            motorista,
            placa,
            marca,
            modelo,
            ano,
            cor
        });        
    });
};

exports.allConnections = () => {
    return connections;
};

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data)
    });
};