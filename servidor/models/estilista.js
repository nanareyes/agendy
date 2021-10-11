import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const estilistaSchema = new Schema({
    identificacion: {type:Number, required:[true, 'Identificación requerida']},
    nombres: {type: String, required: [true, 'Nombre obligatorio']},
    apellidos: {type: String, required: [true, 'Apellidos obligatorio']}, 
    fechaNacimiento: Date,
    direccion: {type: String, required: [true, 'Dirección requerida']},
    ciudad: {type: String, required: [true, 'Ciudad obligatorio']}, 
    departamento: {type: String, required: [true, 'Departamento obligatorio']}, 
    telefono: {type:Number, required:[true, 'teléfono requerido']},
    correoElectronico: {type: String, required: [true, 'Email obligatorio']},
    password: {type: Number, required: [true, 'Contraseña obligatoria']},
    terminos: {type: Boolean, required: [true, 'terminos obligatorios']},
});


// Convertir a modelo
const Estilista = mongoose.model('Estilista', estilistaSchema);
export default Estilista;