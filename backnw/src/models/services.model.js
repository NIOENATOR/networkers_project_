// 1 importar mongoose
const mongoose = require("mongoose")

//schema -> colección

// 2 llamar a la clase Schema
const { Schema } = mongoose


// 3 crear el schema
const employeeSchema = new Schema(
    {
        name: { type: String, required: true},
        lastName: { type: String, required: true},
        email: { type: String, required: true},
        password: { type: String, required: true},
        age: { type: Number, required: true},
        city: { type: String, required: true},
        country: { type: String, required: true},
        occupation: { type: String, required: true},
    },

    {
        versionKey: false, // que deseamos capturar cada que se inserte un dato
        timestamps: true
    }
)

// 4 exportar como un modelo
//module.exports = mongoose.model("nombre collección", el schema de la coleccion)
module.exports = mongoose.model("employee", employeeSchema)