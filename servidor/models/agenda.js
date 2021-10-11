import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const agendaSchema = new Schema({
    nombre_completo: {type: String, required: [true, 'Nombre obligatorio']},
    fecha_agenda: Date,
    ciudad: {type: String, required: [true, 'ciudad requerida']},
    email: {type: String, required: [true, 'email obligatorio']},
    telefono: {type:Number, required:[true, 'teléfono requerido']},
});


// Convertir a modelo
const Agenda = mongoose.model('Agenda', agendaSchema);
export default Agenda;
