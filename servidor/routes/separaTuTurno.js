import express from "express";
const router = express.Router();

//importar modelo
import SeparaTuTurno from "../models/separaTuTurno";

//Ruta para consultar todos los turnos
router.get('/separaTuTurno', async(req,res)=> {
    try {
        const separaTuTurnoDB = await SeparaTuTurno.find();
        res.json(separaTuTurnoDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Se presentó un error al consultar los turnos',
            error
        })
    }
});

//Ruta para consultar un turno
router.get('/separaTuTurno/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const separaTuTurnoDB = await SeparaTuTurno.findOne({ _id });
        res.json(separaTuTurnoDB);
    }
    catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Ruta para crear un nuevo turno
router.post('/nuevo-turno', async (req, res) => {
    const body = req.body;

    try {
        const separaTuTurnoDB = await SeparaTuTurno.create(body);
        res.status(200).json(separaTuTurnoDB);
    }
    catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});
// Delete eliminar un turno
router.delete('/elimina-separaTuTurno/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const separaTuTurnoDB = await SeparaTuTurno.findByIdAndDelete({ _id });

        if (!separaTuTurnoDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(separaTuTurnoDB);
    }

    catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Put actualizar un turno
router.put('/actualizar-turno/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const separaTuTurnoDB = await SeparaTuTurno.findByIdAndUpdate(
            _id, body, { new: true });
        res.json(separaTuTurnoDB);
    }
    catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Exportar configuración
module.exports = router;