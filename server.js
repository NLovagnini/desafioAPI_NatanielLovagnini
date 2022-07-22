const express = require('express')
const http = require('http')
const app = express()
const Container = require('./class.js')
const routes = require('./routes.js')
const prodContainer = new Container()
const file = './products.json'


const httpServer = http.createServer(app)



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/productos', routes)
app.use(express.static(__dirname+"/public"))


const PORT = 8000
const sv = httpServer.listen(PORT, () =>{
    console.log(`PORT ${PORT} ONLINE`)
})
