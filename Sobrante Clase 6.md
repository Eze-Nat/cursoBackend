
const fs = require("fs");
const http = require('http')
const PORT = 8080;
const server = http.createServer((req, res) => {

  const horaActual = Date.now

  if(horaActual>5 &&horaActual <13){
    res.end("Buenos dias ")
    }else if(horaActual>=13 &&horaActual <=19){
    res.end("Buenas Tardes")
    }else{
    res.end("Buenas noches ")
    }
    });

server.listen(PORT, () => {
  console.log(`Servidor Http escuchando en el puerto http://localhost:${PORT}`);
});


git clone https://github.com/guillejf/43495 
npm i (para instalar todo)