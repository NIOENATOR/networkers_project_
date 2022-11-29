const express = require("express")
const router = express.Router()


//importar modelo
const employee = require("../models/services.model")


// rutas

//crear Employee
router.post("/create-employee", async (req, res) =>{
    
    let {name, lastName, email, password, age, city, country, occupation} = req.body

    const newEmployee = new employee(req.body)
    await newEmployee.save()

    return res.status(201).json({msg: "Registro Networkers exitoso"})
})

//Listar Employee

router.get("/get-employee", async (req, res) => {

    const employees = await employee.find()
    return res.status(200).json({data: employees})

})
    

//eliminar Employee

router.delete("/delete-employee", async (req, res) =>{

    await employee.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Empleado eliminado eliminada", id: req.query.id})

})


//Actualizar Employee

router.put("/update-employee", async (req, res) => {

    await employee.findByIdAndUpdate(req.query.id, {$set: req.body})
    res.status(200).json({msg: "Oferta actualizada exitosamente"})
})





//exportar las rutas
module.exports = router