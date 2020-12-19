const socketio = require('socket.io');

let io;
const connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);
    io.on('connection', socket =>{           
        const { latitude, longitude } = socket.handshake.query;
        connections.push({
            id: socket.id,           
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)                
            }
        });       
    });

   exports.sendMessage = ( message, data) => {        
          io.emit(message, data);        
      } 
};
