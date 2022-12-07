// 1 importar mongoose
const mongoose = require("mongoose")

//schema -> colección

// 2 llamar a la clase Schema
const { Schema } = mongoose


// 3 crear el schema
const servicesSchema = new Schema(
    {
        title: { type: String, required: true},
        price: { type: Number, required: true},
        description: { type: String, required: true},
        image: { type: String, default: "Sin imagen adjunta"},
        keywords: { type: String, default: ""},
        phoneNumber: {type: Number, default: 0}
    },

    {
        versionKey: false, // que deseamos capturar cada que se inserte un dato
        timestamps: true
    }
)

// 4 exportar como un modelo
//module.exports = mongoose.model("nombre collección", el schema de la coleccion)
module.exports = mongoose.model("services", servicesSchema)