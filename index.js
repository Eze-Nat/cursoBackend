class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`El usuario es ${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);

    }

    countMascotas() {
    return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre, autor})
    }

    getBookNames() {
        this.libros.forEach((element) => {
            console.log(element)
        });
    }
}

const usuario = new Usuario('Ezequiel', 'Natale', [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}], ['Perro', 'Gato']);


console.log(usuario)
