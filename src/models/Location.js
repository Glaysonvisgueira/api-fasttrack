const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
}, {timestamps: true});

const CoordenadasSchema = new mongoose.Schema({   
    location: { 
      type: PointSchema,
      index: '2dsphere'
    },
    motorista: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Veiculos',
      require: true,
    }    
  });
  
  module.exports = mongoose.model('Localizacao', CoordenadasSchema);