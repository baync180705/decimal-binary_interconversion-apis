import decimalToBinary from "./utils/decimal_to_binary.js";
import binaryToDecimal from "./utils/binary_to_decimal.js";
import express from 'express'

const app = express()
const PORT = 7000

app.use(express.json())

app.post('/d2b',(req,res)=>{
    const decimal = parseInt(req.body.decimal)
    return (res.send(decimalToBinary(decimal)))
})

app.post('/b2d',(req,res)=>{
    const binary = req.body.binary
    return (res.send(binaryToDecimal(binary)))
})

app.listen(PORT,()=>{
    console.log(`App listened on http://localhost:${PORT}`)
})