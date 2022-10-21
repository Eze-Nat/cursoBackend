const express = require('express')
const fs = require("fs");
const Contenedor = require("./classContainer")
const app = express()
const port = process.env.PORT || 8080;


app.get('/getall', async (req, res) => {
  const contenedor = new Contenedor();
  
  const todos = await contenedor.getAll();
  
  res.json(todos);
  
})

app.get('/algo', async (req, res) => {
  const todos = await contenedor.getAll();
  res.json({id: 100, name: "algo", age: 20})
})

app.get('/random', async (req, res) => {
  const algunoRandom = await /* mathrandom */
  res.json(/* Codear para que tire algun producto math random? */)
})

app.get('/alumnos', (req, res) => {
  res.json([
    {id: 100, name: "algo", age: 20},
    {id: 101, name: "algo2", age: 30},
    {id: 102, name: "algo3", age: 40}])
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

