const express = require("express")
const router = express.Router()


//importar modelo
const employee = require("../models/employee.model")


// rutas

//crear Employee
router.post("/create-employee", async (req, res) =>{
    
    let {name, pay, description, image, keyWords} = req.body

    const newEmployee = new employee(req.body)
    await newEmployee.save()

    return res.status(201).json({msg: "Oferta Networkers guardada con exito"})
})

//Listar Employee

router.get("/get-employee", async (req, res) => {

    const employees = await employee.find()
    return res.status(200).json({data: employees})

})
    

//eliminar Employee

router.delete("/delete-employee", async (req, res) =>{

    await employee.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Producto eliminado", id: req.query.id})

})


//Actualizar Employee

router.put("/update-employee", async (req, res) => {

    await employee.findByIdAndUpdate(req.query.id, {$set: req.body})
    res.status(200).json({msg: "Producto actualizado exitosamente"})
})





//exportar las rutas
module.exports = router