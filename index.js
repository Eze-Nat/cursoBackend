
const fs = require("fs");


class Contenedor {

  constructor(datos) {
    this.datos = datos;
  }


  async save(object) {

    const data = await fs.promises.readFile("productos.txt", 'utf-8')
    const producto = JSON.parse(data);
    const id = producto.length + 1
    object.id = id;
    
    producto.push(object)

    const productoConvertido = JSON.stringify(producto)
    await fs.promises.writeFile("productos.txt", productoConvertido);

    return producto;
  }

  async getById(id) {
    const data = await fs.promises.readFile("productos.txt", 'utf-8');
    const producto = JSON.parse(data);
    const productId = producto.find((product) => product.id == id)
    if(productId) {
      return productId
    } else {
      return "No se encontro"
    }
  }

  async getAll() {
    const data = await fs.promises.readFile("productos.txt", 'utf-8');
    return JSON.parse(data);
  }

  async deleteById(id) {
    const data = await fs.promises.readFile("productos.txt", 'utf-8');
    const producto = JSON.parse(data);
    const productId = producto.find((product) => product.id == id)
  
    producto.slice(productId)
    const productoBorrado = JSON.stringify(productId)
    await fs.promises.writeFile("productos.txt", productoBorrado);

    return producto;
  }

  async deleteAll() {
    const data = await fs.promises.readFile("productos.txt", 'utf-8');
    const prodDel = [];
    await fs.promises.writeFile("productos.txt", prodDel);
  }

}

async function start() {
const productos = new Contenedor("data");
//const addProd = await productos.save({nombre: "papa", precio: 400})
//const prod = await productos.getAll();
//console.log(prod)
//const productId = await productos.getById(1);
//console.log(productId) 
//const prodDeleteId = await productos.deleteById(2)
//console.log(prodDeleteId)
//const prodDeleteAll = await productos.deleteAll()
//console.log(prodDeleteAll)
}

start()