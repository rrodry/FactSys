const router = require("express").Router()
const { Users, Products } = require('../bd.js');
const jwt = require('jsonwebtoken')
const { ACCESS_TOKEN } = require('../../config.js')
const { authenticateToken, authenticateTokenWeb } = require('../middle/middleFunc.js')
const Buffer = require('buffer').Buffer

router.get("/login", async (req,res) => {
  try {
    const {user, pass} = req.query

    const enconde = Buffer.from(pass).toString('base64')
    const userBd = await Users.findAll({
        where:{
            user:user,
            password:enconde
        }
    })

    if(userBd.length > 0){
        
      const token = authenticateToken(user, ACCESS_TOKEN)
      res.status(200).send(token)

    } else {
      res.status(401).send("Error de usuario y/o contraseña")
    }
  } catch (error) {
    res.send(error)
  }
})

router.get("/getUsers", (req, res) => {
  const {token} = req.query
  const tokenDecoded = authenticateTokenWeb(token)
  res.send(tokenDecoded)
  console.log(tokenDecoded);

})

router.get("/getAllProducts", (req, res) => {
  Products.findAll()
  .then(products => {
    const fetproducts = []

    products.map(product => {
      fetproducts.push({
        value: product.product,
        label: product.product,
        price: product.price,
        code: product.code
      })
    })
    
    res.send(fetproducts)

  })
  .catch(error => res.send(error))
})

module.exports = router