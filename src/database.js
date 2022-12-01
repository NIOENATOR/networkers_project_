const mongoose = require("mongoose")

const dbName = "datanw"
const uri = `mongodb+srv://NIOENATOR:Colombia2022@cluster0.lvejfed.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true})
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose