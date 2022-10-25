
const fs = require("fs");

//const inicio = fs.writeFileSync(`data/productos.txt`, "[]")

class Contenedor {

  constructor(data) {
    this.data = data;
  }

  
  
  async save(object) {

    const data = await fs.promises.readFile(`${this.data}/productos.txt`, 'utf-8');
    const producto = JSON.parse(data);
    const id = producto.length + 1;
    object.id = id;
    
    producto.push(object);

    const productoConvertido = JSON.stringify(producto);
    await fs.promises.writeFile(`${this.data}/productos.txt`, productoConvertido);

    return producto;
  }

  async getById(id) {
    const data = await fs.promises.readFile(`${this.data}/productos.txt`, 'utf-8');
    const producto = JSON.parse(data);
    const productId = producto.find((product) => product.id == id)
    if(productId) {
      return productId
    } else {
      return "No se encontro"
    }
  }

  async getAll() {
    const data = await fs.promises.readFile(`${this.data}/productos.txt`, 'utf-8');
    return JSON.parse(data);
  }

  async deleteById(id) {
    const data = await fs.promises.readFile(`${this.data}/productos.txt`, 'utf-8');
    const producto = JSON.parse(data);
    const productId = producto.find((product) => product.id == id)
  
    if(productId) {
      producto.splice(producto.indexOf(productId), 1)
      console.log(producto)
      await fs.promises.writeFile(`${this.data}/productos.txt`, JSON.stringify(producto, null, 2))
    } else {
      return console.log("No se encontro")
    }
  }

  async deleteAll() {
    const data = await fs.promises.readFile(`${this.datos}/productos.txt`, 'utf-8');
    const prodDel = [];
    await fs.promises.writeFile(`${this.data}/productos.txt`, prodDel);
  }

}

async function start() {
const productos = new Contenedor("data");
const addProd = await productos.save({nombre: "papa", precio: 400})
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