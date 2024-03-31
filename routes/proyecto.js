const {Router} = require('express')

const route = Router()


//Listar todos los datos
const {getProyecto,postProyecto,putProyecto,deleteProyecto} = require('../controllers/proyecto')//Importando el controlador

route.get('/', getProyecto)

route.post('/', postProyecto)

route.put('/', putProyecto)

route.delete('/', deleteProyecto)
// //Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Lista Datos'
//     })
// })

// //Metodo para agregar datos
// route.post('/', (req, res) => {
//     res.json({
//         msg: 'Insercion exitosa'
//     })
// })


module.exports = route 