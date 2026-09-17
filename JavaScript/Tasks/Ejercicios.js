/**
 * TODO: EJERCICIO 1 - Calculadora Básica
 * Crea una función llamada calculadora que reciba dos números y un operador (+, -, *, /).
 * La función debe retornar el resultado de la operación
 * Debe imprimir un ejemplo con cada operador
 * Tener en cuenta la division por 0
 * Ejemplo: calculadora(10, 5, "+"); -> Resultado esperado: 15 
 */
console.log("==========EJERCICIO 1===========");

function calculadora(num1, num2, operador) {

    switch (operador) {

        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Error: no se puede dividir entre 0";
            }
            return num1 / num2;

        default:
            return "Error: operador no válido";
    }
}

console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));

/**
 * TODO: EJERCICIO 2 - Tabla de Multiplicar
 * Crea una función llamada tablaMultiplicar.
 * Debe recibir 2 numeros:
 *  - El primero es el numero de la tabla de multiplicar
 *  - El segundo es la cantidad de operaciones a realizar
 * Debe imprimir la tabla de multiplicar solicitada
 * Ejemplo: 2 y 15 -> Tabla de Multiplicar del 2 al 15
 */
console.log("==========EJERCICIO 2===========");

function tablaMultiplicar(numero, cantidad) {

    for (let i = 1; i <= cantidad; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

tablaMultiplicar(2,15);

/**
 * TODO: EJERCICIO 3 - Gestión de Producto
 * Tienes el siguiente arreglo.
 * Realiza las siguientes operaciones:
 *  - Agregar "Monitor"
 *  - Agregar "Audífonos" al inicio
 *  - Eliminar el último elemento
 *  - Mostrar el arreglo final
 */
console.log("==========EJERCICIO 3===========");

const productos = ["Laptop", "Mouse", "Teclado"];

productos.push("Monitor");
productos.unshift("Audifonos");
productos.pop();
console.log(productos);

/**
 * TODO: EJERCICIO 4 - Inventario de Estudiantes
 * Crea un objeto llamado estudiante. Debe contener:
 *  - nombre
 *  - edad
 *  - carrera
 *  - materias (array)
 * Posteriormente:
 *  - Cambia la edad.
 *  - Agrega una nueva materia.
 *  - Muestra todas las propiedades utilizando Object.entries() (Investigar).
 */
console.log("==========EJERCICIO 4===========");

const estudiante = {
    nombre: "Laura",
    edad: 20,
    carrera: "Ingeniería",
    materias: [
        "Matemáticas",
        "Programación"
    ]
};

estudiante.edad = 21;
estudiante.materias.push("Base de datos");
console.log(Object.entries(estudiante));

/**
 * TODO: EJERCICIO 5 - Filtrar Empleados
 * Dado el siguiente arreglo:
 * Obtén un nuevo arreglo que contenga únicamente los empleados 
 * cuyo salario sea mayor o igual a 4000.
 */
console.log("==========EJERCICIO 5===========");

const empleados = [
    { nombre: "Ana", salario: 3000 },
    { nombre: "Luis", salario: 5000 },
    { nombre: "Pedro", salario: 2500 },
    { nombre: "Sara", salario: 7000 }
];

const empleadosFiltrados = 
empleados.filter(function(empleado){
    return empleado.salario >= 4000;
});

console.log(empleadosFiltrados);


/**
 * TODO: EJERCICIO 6 - Estadísticas de Ventas
 * Dado el siguiente arreglo:
 * Calcular:
 *  - Total vendido.
 *  - Venta más alta (Math.max investigar).
 *  - Promedio de ventas.
 */

console.log("==========EJERCICIO 6===========");


const ventas = [250, 400, 150, 600, 800];
const totalVendido = ventas.reduce((total, venta) => total + venta  , 0);
const ventaMasAlta = Math.max(...ventas);
const promedioVentas = totalVendido / ventas.length;

console.log("Total vendido: " + totalVendido);      
console.log("Venta más alta: " + ventaMasAlta);
console.log("Promedio de ventas: " + promedioVentas);


/**
 * TODO: EJERCICIO 7 - Catálogo de Libros
 * Dado el siguiente arreglo:
 * Realiza las siguientes operaciones:
 *  - Encontrar el libro con id 2.
 *  - Obtener solo los libros disponibles.
 *  - Crear un arreglo únicamente con los títulos.
 */

console.log("==========EJERCICIO 7===========");

const libros = [
    {
        id: 1,
        titulo: "JavaScript",
        disponible: true
    },
    {
        id: 2,
        titulo: "Python",
        disponible: false
    },
    {
        id: 3,
        titulo: "Java",
        disponible: true
    }
];

const libroEncontrado = libros.find(libro => libro.id === 2);
const librosDisponibles = libros.filter(libro => libro.disponible === true);
const titulosLibros = libros.map(libro => libro.titulo);    

console.log("Libro con id 2: ", libroEncontrado);
console.log("Libros disponibles: ", librosDisponibles);
console.log("Títulos de libros: ", titulosLibros);  



/**
 * TODO: EJERCICIO 8 - Copias y Referencias
 * Dado el siguiente objeto:
 * Realiza lo siguiente:
 *  - Crea una copia del usuario utilizando asignación (=).
 *  - Modifica el nombre de la copia.
 *  - Observa el resultado de ambos.
 *  - Ahora crea una copia utilizando Spread.
 *  - Modifica nuevamente el nombre.
 *  - Observa el resultado de ambos.
 *  - Explica la diferencia entre ambos casos.
 */

console.log("==========EJERCICIO 8===========");

//copia por asignación

const usuario = {
    nombre: "Carlos",
    edad: 30
};

const copiaAsignacion = usuario;
copiaAsignacion.nombre = "Cristiano";

console.log("Usuario original: ", usuario);
console.log("Copia por asignación: ", copiaAsignacion);

//copia por spread
const usuario2 = {
    nombre: "Carlos",
    edad: 30
};

const copiaSpread = { ...usuario2 };
copiaSpread.nombre = "Cristiano";

console.log("Usuario original: ", usuario2);    
console.log("Copia por spread: ", copiaSpread);

/**
 * Explicación:
 * En el primer caso, al hacer la copia por asignación, tanto la variable usuario como copiaAsignacion apuntan al mismo objeto en memoria. Por lo tanto, al modificar el nombre en copiaAsignacion, también se modifica en usuario.
 * En el segundo caso, al hacer la copia utilizando Spread, se crea un nuevo objeto en memoria. Por lo tanto, al modificar el nombre en copiaSpread, no afecta al objeto original usuario2.
 */


/**
 * TODO: EJERCICIO 9 - Desestructuración
 * Dado el siguiente objeto:
 * Realiza las siguientes tareas:
 *  - Extrae las propiedades marca y ram.
 *  - Renombra almacenamiento como ssd.
 *  - Asigna un valor por defecto a una propiedad llamada tarjetaGrafica.
 */

console.log("==========EJERCICIO 9===========");

const computador = {
    marca: "Lenovo",
    procesador: "Intel i7",
    ram: 16,
    almacenamiento: 512
};

const { marca, ram, almacenamiento: ssd, tarjetaGrafica = "NVIDIA" } = computador;

console.log("Marca: ", marca);
console.log("RAM: ", ram);
console.log("SSD: ", ssd);
console.log("Tarjeta Gráfica: ", tarjetaGrafica);

/**
 * TODO: EJERCICIO 10 - Sistema de Gestión de Estudiantes
 * Dado el siguiente arreglo:
 * Desarrolla un programa que permita:
 *  - Mostrar únicamente los estudiantes aprobados (nota mayor o igual a 3.0).
 *  - Mostrar únicamente los mayores de edad.
 *  - Obtener un arreglo únicamente con los nombres.
 *  - Buscar al estudiante con id 3.
 *  - Calcular el promedio de todas las notas.
 *  - Encontrar el estudiante con la nota más alta.
 *  - Crear un nuevo arreglo agregando la propiedad estado, cuyo valor será "Aprobó" o "Reprobó" según la nota.
 *  - Realizar una copia del arreglo utilizando el operador Spread.
 */

const estudiantes2 = [
    {
        id: 1,
        nombre: "Ana",
        nota: 4.5,
        edad: 20
    },
    {
        id: 2,
        nombre: "Luis",
        nota: 3.8,
        edad: 18
    },
    {
        id: 3,
        nombre: "Carlos",
        nota: 4.9,
        edad: 22
    },
    {
        id: 4,
        nombre: "Laura",
        nota: 2.9,
        edad: 19
    }
];
