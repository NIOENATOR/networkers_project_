const express = require("express")
const router = express.Router()


//importar modelo
const user = require("../models/user.model")


// rutas

//crear usuario
router.post("/create-user", async (req, res) =>{
    
    let { email } = req.body

    email = email.toLowerCase ()
    req.body.email = email

    let userExists = await user.find({email: email})


    if (userExists.length !== 0) {
        return res.status(400).json({msg: "El usuario ya existe"})
    }

    const newUser = new user(req.body)
    await newUser.save()

    return res.status(201).json({msg: "Registro Networkers exitoso"})
})

//Listar Usuarios

router.get("/get-user", async (req, res) => {

    const users = await user.find()
    return res.status(200).json({data: users})

})
    

//eliminar Usuario

router.delete("/delete-user", async (req, res) =>{

    await user.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Usuario eliminado", id: req.query.id})

})


//Actualizar Usuario

router.put("/update-user", async (req, res) => {

    await user.findByIdAndUpdate(req.query.id, {$set: req.body})
    res.status(200).json({msg: "Usuario actualizado exitosamente"})
})

//exportar las rutas
module.exports = router