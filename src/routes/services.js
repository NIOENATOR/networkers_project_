const express = require("express")
const router = express.Router()


//importar modelo
const services = require("../models/services.model")


// rutas

//crear services
router.post("/create-services", async (req, res) =>{
    
    let { title, price, description, image, keyWords } = req.body

    const newServices = new services(req.body)
    await newServices.save()

    return res.status(201).json({msg: "Servicio creado exitosamente"})
})

//Listar services

router.get("/get-services", async (req, res) => {

    const servicess = await services.find()
    return res.status(200).json({data: servicess})

})
    //pp**//

//eliminar services

router.delete("/delete-services", async (req, res) =>{

    await services.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Servicio elimidado satisfactoriamente", id: req.query.id})

})


//Actualizar services

router.put("/update-services", async (req, res) => {

    await services.findByIdAndUpdate(req.query.id, {$set: req.body})
    res.status(200).json({msg: "Servicio actualizado exitosamente"})
})





//exportar las rutas
module.exports = router