import express from 'express'
import multer from 'multer'

const api=express()

const uploads=multer({dest:'uploads/img'})
api.use(express.json())

const port=3000

api.get('/', (req, res)=>{
    res.send("api conectada")
})

api.post('/profile', uploads.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send("archivo enviado")
})


api.listen(port, ()=>{
    console.log(`conectado al http://localhost:${port}`)
})