const Veiculo = require('../models/Veiculo');

module.exports = {

    //Procurar veículo pela placa
    async index(request, response){  
        const veiculo = await Veiculo.find({
            placa: request.query.placa            
        });
        return response.json(veiculo);
    },
}
