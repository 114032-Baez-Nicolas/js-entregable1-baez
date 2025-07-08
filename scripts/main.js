// Entrega 1: Proyecto de biblioteca - Báez Nicolás (Es una empresa que consiste en la carga de libros en su base de datos y multiples filtros)..
const libros = [
    { nombre: "El señor de los anillos", precio: 8900, autor: "J.R.R. Tolkien", stock: 3 },
    { nombre: "Harry Potter y la piedra filosofal", precio: 5100, autor: "J.K. Rowling", stock: 10 },
    { nombre: "Don Quijote de la Mancha", precio: 4800, autor: "Miguel de Cervantes", stock: 2 },
    { nombre: "El Principito", precio: 2500, autor: "Antoine de Saint-Exupéry", stock: 15 },
    { nombre: "La metamorfosis", precio: 8000, autor: "Franz Kafka", stock: 6 }
];

// 1) Cargar libros en la base de datos de la empresa
console.log("1) Cargar libros en la base de datos de la empresa:");
let cantidad = Number(prompt("Ingrese la cantidad de libros que desea añadir al sistema.."));

function validarCarga(lNombre) {
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].nombre.toLowerCase() === lNombre.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function agregarProductos(lCantidad) {
    for (let i = 0; i < lCantidad; i++) {

        let libroName = prompt("Ingrese el nombre del libro..");

        if (libroName === "") {
            alert("Error, no se permiten campos vacíos o nulos..");
            i--;
            continue;
        }

        if (validarCarga(libroName)) {
            alert("Error, libro ya ingresado en el sistema..");
            i--;
            continue;
        }

        let libroPrecio = Number(prompt("Ingrese el precio del libro.."));
        if (isNaN(libroPrecio || libroPrecio <= 0)) {
            alert("Error, ingrese un precio válido..");
            i--;
            continue;
        }

        let libroAutor = prompt("Ingrese el autor/a del libro..");
        if (libroAutor === "") {
            alert("Error, debe ingresar el nombre del autor..");
            i--;
            continue;
        }

        let libroStock = Number(prompt("Ingrese el stock del libro.."));
        if (isNaN(libroStock || libroStock <= 0)) {
            alert("Error, ingrese un stock válido..");
            i--;
            continue;
        }

        libros.push({
            nombre: libroName,
            precio: libroPrecio,
            autor: libroAutor,
            stock: libroStock
        });
    }
}

agregarProductos(cantidad);
console.log(libros);

// 2) Mostrar los libros más caros
console.log("2) Libros más caros del mercado:");
let msjPersonalizado;

function mostrarProductosCaros() {
    let masCaro = libros.filter(libro => libro.precio > 5000);

    msjPersonalizado = masCaro.map(libro => {
        return `Libro: ${libro.nombre} | Autor: "${libro.autor}" | Precio: $${libro.precio} \n`
    });

    return msjPersonalizado;
}

console.log(mostrarProductosCaros().join(""));