
const Veiculo = require('../models/Veiculo');

module.exports = { 
    async index(request, response) {
        const id_motorista = await Veiculo.findOne({
            "detalhesVeiculo.placa": request.query.placa          
        });        
        return response.json(id_motorista);
    },   
}
