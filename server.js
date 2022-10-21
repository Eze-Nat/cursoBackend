const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hola! Primer Api')
})

app.get('/algo', (req, res) => {
  res.json({id: 100, name: "algo", age: 20})
})

app.get('/random', (req, res) => {
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