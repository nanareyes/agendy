import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    identificacion: {type:Number, required:[true, 'Identificación requerida']},
    nombres: {type: String, required: [true, 'Nombre obligatorio']},
    apellidos: {type: String, required: [true, 'Apellidos obligatorio']}, 
    fechaNacimiento:{type: Date},
    direccion: {type: String, required: [true, 'Dirección requerida']},
    ciudad: {type: String, required: [true, 'Ciudad obligatorio']}, 
    departamento: {type: String, required: [true, 'Departamento obligatorio']}, 
    telefono: {type:Number, required:[true, 'teléfono requerido']},
    email: {type: String, required: [true, 'Email obligatorio']},
    password: {type: String, required: [true, 'Contraseña obligatoria']},
    users: {type: String, required: [true, 'Usuario obligatorio']},    
    terminos: {type: Boolean, required: [true, 'terminos obligatorios']},
});

// Eliminar pass de respuesta JSON
userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;  }

// Convertir a modelo
const User = mongoose.model('User', userSchema);
export default User;