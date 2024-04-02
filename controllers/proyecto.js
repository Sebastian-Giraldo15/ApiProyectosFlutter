const {response} = require('express')

const Proyecto = require('../models/proyecto')

const getProyecto = async(req, res) => {
    const proyectos = await Proyecto.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: proyectos
    })
}

const postProyecto = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const proyectos = new Proyecto(datos) //Instanciar el objeto
        await proyectos.save()//Guardar en la base de dato  
        // console.log(Proyecto) 
    } catch(error) {
        mensaje = error
        // console.log(error)
    }

    res.json({
        msg: mensaje
    })
}

const putProyecto = async(req, res) =>{
    const {nombre_proyecto, puntaje, imagen } = req.body
    try {
        const proyectos = await Proyecto.findOneAndUpdate({nombre_proyecto: nombre_proyecto},
            {puntaje: puntaje, imagen: imagen})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteProyecto = async(req, res) =>{
    const {nombre_proyecto} = req.body //Desestructurar
    try {
        const proyectos = await Proyecto.findOneAndDelete({nombre_proyecto: nombre_proyecto})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getProyecto,
    postProyecto,
    putProyecto,
    deleteProyecto
}
