const express = require("express");
const router = express.Router();
const jwt = require ("jsonwebtoken");


//importar modelo
const User = require("../models/user.model")


// rutas

//crear usuario
router.post("/signup", async (req, res) =>{
    
    let { email } = req.body

    email = email.toLowerCase ()
    req.body.email = email

    //obtenber los usuarios que tienen ese email
    let userExists = await User.find({ email: { $eq: email } });
    console.log(userExists);


    if (userExists.length !== 0) {
        return res.status(400).json({msg: "El usuario ya existe"})
    }

    const newUser = new User(req.body)
    await newUser.save();

    return res.status(201).json({msg: "Registro en Networkers exitoso"});
});

//Listar Usuarios

router.get("/get-user", async (req, res) => {

    const users = await User.find()
    return res.status(200).json({data: users})

})
    

//eliminar Usuario

router.delete("/delete-user", async (req, res) =>{

    await User.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Usuario eliminado", id: req.query.id})

})


//Actualizar Usuario

router.put("/update-user", async (req, res) => {

    await User.findByIdAndUpdate(req.query.id, {$set: req.body})
    res.status(200).json({msg: "Usuario actualizado exitosamente"})
}
)

router.post("/login", async (req, res) => {
    try {
        
        const user = await User.find({email: req.body.email})
  
       if(user.length > 0){
          // revisar si la contraseña es correcta
          const isPass = req.body.password === user[0].password// true - correcta || false - incorrecta
  
          if(isPass){
              let {name, lastName, email, _id} = user[0]
  
              let payload = {
                  _id: user[0]._id.toString(), //convertir el id de objectID a string
                  name,
                  lastName,
                  email
              }
  
              console.log(payload)
  
              // sucess - generar el token
              const token = jwt.sign(payload, "llave-secreta")
              return res.status(200).json({token: token})
          }
          // error- la contraseña es incorrecta
          return res.status(401).json({msg: "La contraseña es incorrecta"})
       }
      return res.status(401).json({msg: "El usuario no existe"})
  
    // error- la cuenta no existe
  
    } catch (error) {
      console.log(error);
      // bloque de codigo en el catch
    }
  });
  
  
//exportar las rutas
module.exports = router