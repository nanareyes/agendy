import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    identificacion: {type:Number, required:[true, 'Identificación requerida']},
    nombres: {type: String, required: [true, 'Nombre obligatorio']},
    apellidos: {type: String, required: [true, 'Apellidos obligatorio']}, 
    fechaNacimiento:{type: Date},
    direccion: {type: String, required: [true, 'Dirección requerida']},
    ciudad: {type: String, required: [true, 'Ciudad obligatorio']}, 
    departamento: {type: String, required: [true, 'Departamento obligatorio']}, 
    telefono: {type:Number, required:[true, 'teléfono requerido']},
    correoElectronico: {type: String, required: [true, 'Email obligatorio']},
    contraseña: {type: Number, required: [true, 'Contraseña obligatoria']},
});


// Convertir a modelo
const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;