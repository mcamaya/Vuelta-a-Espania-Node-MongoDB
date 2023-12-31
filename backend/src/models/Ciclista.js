import mongoose from "mongoose";

const mySchema = mongoose.Schema(

{
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    paisNatal: {
        type: String,
        required: true,
        trim: true
    },
    carrerasCorridas: {
        type: Number,
        required: true,
        trim: true
    },
    edad: {
        type: Number,
        required: true,
        trim: true
    },
    dni: {
        type: Number,
        required: true,
        trim: true
    },
    equipo: {
        type: String,
        required: true,
        trim: true
    }
}, 

{
    timestamps: true
}

);

const Ciclista = mongoose.model("ciclistas", mySchema);

export default Ciclista;