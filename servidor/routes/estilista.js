import express from "express";
const router = express.Router();

//importar modelo
import Estilista from "../models/estilista";

//Ruta para consultar todos los estilistas
router.get('/estilistas', async(req,res)=> {
    try {
        const estilistaDB = await Estilista.find();
        res.json(estilistaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Se presentó un error al consultar los estilistas',
            error
        })
    }
});

//Ruta para consultar un estilista
router.get('/estilista/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const estilistaDB = await Estilista.findOne({ _id });
        res.json(estilistaDB);
    }
    catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Ruta para crear un nuevo estilista
router.post('/nuevo-estilista', async (req, res) => {
    const body = req.body;

    try {
        const estilistaDB = await Estilista.create(body);
        res.status(200).json(estilistaDB);
    }
    catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});
// Delete eliminar un estilista
router.delete('/estilista/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const estilistaDB = await Estilista.findByIdAndDelete({ _id });

        if (!estilistaDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(notaDB);
    }

    catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Put actualizar un estilista
router.put('/estilista/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const estilistaDB = await Estilista.findByIdAndUpdate(
            _id, body, { new: true });
        res.json(estilistaDB);
    }
    catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Exportar configuración
module.exports = router;