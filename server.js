import express from 'express'
const servidor = express()
servidor.get('/', (req, res) => {
 res.send("Olá! A API está funcionando corretamente.")
})
servidor.listen(3000, () => {
console.log("deu bom!")
})
