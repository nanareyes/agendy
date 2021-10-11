import express from "express";
const router = express.Router();

//importar modelo
import Cliente from "../models/cliente";

//Ruta para crear un nuevo cliente
router.post('/nuevo-cliente', async (req, res) => {
    const body = req.body;
    console.log('body**********************', body);

    try {
        const clienteDB = await Cliente.create(body);
        res.status(200).json(clienteDB);
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Ruta para consultar todos los clientes
router.get('/clientes', async(req,res)=> {
    try {
        const clienteDB = await Cliente.find();
        res.json(clienteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Se presentó un error al consultar los clientes',
            error
        })
    }
});
//Ruta para consultar un cliente
router.get('/cliente/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const clienteDB = await Cliente.findOne({ _id });
        res.json(clienteDB);
    }
    catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Delete eliminar un cliente
router.delete('/cliente/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const clienteDB = await Cliente.findByIdAndDelete({ _id });
        if (!clienteDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(clienteDB);
    }
    catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Put actualizar un cliente
router.put('/cliente/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const clienteDB = await Cliente.findByIdAndUpdate(
            _id, body, { new: true });
        res.json(clienteDB);
    }
    catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Exportar configuración
module.exports = router;