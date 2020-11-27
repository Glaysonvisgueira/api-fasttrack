const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],    
    default: null
  },
}, {timestamps: true});

const VeiculoSchema = new mongoose.Schema({   
    motorista: { type: String, uppercase:true, required: true },
    detalhesVeiculo: {
        placa: { type: String, uppercase:true, required: true },
        marca: { type: String, uppercase:true, required: true },
        modelo: { type: String, uppercase:true, required: true },
        ano: { type: Number, required: true },
        cor: { type: String, uppercase:true, required: true },       
      },
      location: { 
        type: PointSchema,
        index: '2dsphere'
      },     
}, {timestamps: true});



module.exports = mongoose.model('Veiculos', VeiculoSchema);