const {Schema, model} = require('mongoose')//Crear una coleccion o acceder a colecciones en mongo 

const proyecto_Schema = ({
    nombre_proyecto:{
        type:String,
        unique:true,
        required:[true, 'El nombre es requerido']
    },

    puntaje:{
        type:String,
        required:[true, 'El numero de puntaje es requerido'],
    },

    imagen:{
        type:String,
        required:[true, 'La img es requerida'],
    },
})


module.exports = model('Proyecto', proyecto_Schema)
