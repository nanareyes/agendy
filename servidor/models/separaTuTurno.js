import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const separaTuTurnoSchema = new Schema({
    nombre_completo: {type: String, required: [true, 'Nombre obligatorio']},
    fecha_cita: Date,
    ciudad: {type: String, required: [true, 'ciudad requerida']},
    email: {type: String, required: [true, 'email obligatorio']},
    telefono: {type:Number, required:[true, 'teléfono requerido']},
    registrarCita: Number,
});


// Convertir a modelo
const SeparaTuTurno = mongoose.model('SeparaTuTurno', separaTuTurnoSchema);
export default SeparaTuTurno;
