const Veiculo = require('../models/Veiculo');
const { allConnections, sendMessage } = require('../websocket');

module.exports = {
    async index(request, response){
        const veiculos = await Veiculo.find();
        return response.json(veiculos);
    },
    async store(request, response) {
        const motorista = "JOÃO"
        const placa = "FFFFFFF";
        const marca = "GM";
        const modelo = "CELTA";
        const ano = 2013;
        const cor = "VERMELHO";
        const location = {
            type: 'Point',
            coordinates: [-42.7662, -5.0447],
        };      

        const veiculoExists = await Veiculo.findOne({"detalhesVeiculo.placa": placa});
        //Verificar se placa do veículo já existe para não duplicar o cadastro
        if(veiculoExists){
            console.log('Placa já cadastrada!')            
            return response.json(veiculoExists);
        }
        //Cadastrar novo veículo
        const veiculo = await Veiculo.create({
            "motorista": motorista,
            "detalhesVeiculo":                 
                {
                    "placa": placa,
                    "marca": marca,
                    "modelo": modelo,
                    "ano": ano,
                    "cor": cor
                },
                location          
        });
        const sendSocketMessageTo = allConnections();
        sendMessage(sendSocketMessageTo, 'new-veiculo', veiculo);        
        return response.json(veiculo);
    } 
    
    //Desenvolver as funções de edição e exclusão.
}
