
const Veiculo = require('../models/Veiculo');
const { allConnections, sendMessage } = require('../websocket');

module.exports = {  
    async update(request, response){
        _id = request.params.id;  
        long = request.body.location.coordinates[0];
        lat = request.body.location.coordinates[1];
        const location = {
            type: 'Point',
            coordinates: [long, lat], 
        };        
        const newLocation = await Veiculo.findByIdAndUpdate(_id, { 
            location
        }, {new: true});     

        sendMessage('new-location', newLocation);

        return response.json(newLocation);
    },    
}
