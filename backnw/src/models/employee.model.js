// 1 importar mongoose
const mongoose = require("mongoose")

//schema -> colección

// 2 llamar a la clase Schema
const { Schema } = mongoose


// 3 crear el schema
const employeeSchema = new Schema(
    {
        name: { type: String, required: true},
        pay: { type: Number, required: true},
        description: { type: String, required: true},
        image: { type: String, default: "Sin imagen adjunta"},
        keyWords: { type: Array, default: []},
    },

    {
        versionKey: false, // que deseamos capturar cada que se inserte un dato
        timestamps: true
    }
)

// 4 exportar como un modelo
//module.exports = mongoose.model("nombre collección", el schema de la coleccion)
module.exports = mongoose.model("employee", employeeSchema)