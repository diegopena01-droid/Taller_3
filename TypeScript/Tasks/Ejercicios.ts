/**
 * TODO: TALLER DE TYPESCRIPT
 */


/**
 * TODO: EJERCICIO 1 - Tipos Básicos
 *
 * Declara las siguientes variables utilizando
 * el tipo de dato correcto:
 *
 * - nombre
 * - edad
 * - salario
 * - estaActivo
 * - ciudad
 *
 * Posteriormente:
 * - Imprime todas las variables y luego su tipo de dato con typeof.
 * - Ej: console.log(variable, typeof variable)
 */

console.log("======== EJERCICIO 1 - Tipos Básicos ========");

const nombre: string = "Alvarito";
const edad: number = 25;
const salario: number = 1500000;
const estaActivo: boolean = true;
const ciudad: string = "Tulua";

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(salario, typeof salario);
console.log(estaActivo, typeof estaActivo);
console.log(ciudad, typeof ciudad);

/**
 * TODO: EJERCICIO 2 - Arrays Tipados
 *
 * Crea los siguientes arreglos:
 *
 * - Un arreglo de números.
 * - Un arreglo de strings.
 * - Un arreglo de booleanos.
 *
 * Después:
 *
 * - Agrega un nuevo elemento (uso del push).
 * - Elimina el último elemento (uso del pop).
 * - Recorre cada arreglo utilizando for...of.
 */

console.log("======== EJERCICIO 2 - Arrays Tipados ========");

const numeros: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["Hola", "Mundo", "TypeScript"];
const booleanos: boolean[] = [true, false, true];

numeros.push(6);
strings.push("Adiós");
booleanos.push(false);

numeros.pop();
strings.pop();
booleanos.pop();

for (const numero of numeros) {
  console.log("Número:", numero);
}

for (const string of strings) {
  console.log("String:", string);
}

for (const booleano of booleanos) {
  console.log("Booleano:", booleano);
}

/**
 * TODO: EJERCICIO 3 - Crear un Type
 *
 * Crea un type llamado Producto que contenga:
 *
 * - id
 * - nombre
 * - precio
 * - disponible
 *
 * Después:
 *
 * - Crea dos productos.
 * - Imprime ambos productos.
 */

console.log("======== EJERCICIO 3 - Crear un Type ========");

type Producto = {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
};

const producto1: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 2000000,
    disponible: true,
};

const producto2: Producto = {
    id: 2,
    nombre: "Mouse",
    precio: 100000,
    disponible: false,
};

console.log("Producto 1:", producto1);
console.log("Producto 2:", producto2);

/**
 * TODO: EJERCICIO 4 - Interfaces
 *
 * Crea una interface llamada Empleado.
 *
 * Debe contener:
 *
 * - nombre
 * - cargo
 * - salario
 *
 * Después:
 *
 * - Crea dos empleados.
 * - Muéstralos por consola.
 */


console.log("======== EJERCICIO 4 - Interfaces ========");

interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
}

const empleado1: Empleado = {
    nombre: "Pepito",
    cargo: "Desarrollador",
    salario: 4000000,
};

const empleado2: Empleado = {
    nombre: "Maluma",
    cargo: "Chofer",
    salario: 2500000,
};

console.log("Empleado 1:", empleado1);
console.log("Empleado 2:", empleado2);

/**
 * TODO: EJERCICIO 5 - Union Types
 *
 * Crea una función llamada mostrarDato.
 *
 * Debe recibir un parámetro que pueda ser:
 *
 * - string
 * - number
 *
 * Si recibe un string deberá mostrarlo en mayúsculas (uso del toUpperCase).
 * Si recibe un número deberá mostrarlo con dos decimales (uso del toFixed).
 */
console.log("======== EJERCICIO 5 - Union Types ========");

function mostrarDato(dato: string | number): void {
    if (typeof dato === "string") {
        console.log(dato.toUpperCase());
    } else {
        console.log(dato.toFixed(2));
    }   

}

mostrarDato("hola profesor");
mostrarDato(20.5);

/**
 * TODO: EJERCICIO 6 - Enums
 *
 * Crea un enum llamado EstadoPedido.
 *
 * Debe contener:
 *
 * - Pendiente
 * - EnProceso
 * - Enviado
 * - Entregado
 *
 * Después:
 *
 * - Crea una variable utilizando el enum.
 * - Imprime su valor.
 */
console.log("==========EJERCICIO 6===========");

enum EstadoPedido{
    Pendiente,
    EnProceso,
    Enviado,
    Entrgado
}

let estado: EstadoPedido = EstadoPedido.EnProceso;

console.log(estado);
/**
 * ==========================================================
 */


/**
 * TODO: EJERCICIO 7 - Clases
 *
 * Crea una clase llamada Vehiculo.
 *
 * Debe contener:
 *
 * - marca
 * - modelo
 *
 * Agrega un método llamado mostrarInformacion()
 * que imprima ambas propiedades.
 *
 * Crea dos objetos utilizando la clase.
 */


/**
 * TODO: EJERCICIO 8 - Herencia
 *
 * Crea una clase Persona.
 *
 * Debe contener:
 *
 * - nombre
 * - edad
 *
 * Luego crea una clase Estudiante
 * que herede de Persona.
 *
 * Agrega la propiedad carrera.
 *
 * Finalmente crea un estudiante
 * e imprime toda su información.
 */


/**
 * TODO: EJERCICIO 9 - Generics
 *
 * Crea una función genérica llamada
 * obtenerPrimero().
 *
 * Debe recibir un arreglo de cualquier tipo
 * y retornar el primer elemento.
 *
 * Prueba la función con:
 *
 * - Un arreglo de números.
 * - Un arreglo de strings.
 * - Un arreglo de booleanos.
 */


/**
 * TODO: EJERCICIO 10 - Sistema de Usuarios
 *
 * Desarrolla un pequeño sistema utilizando
 * todo lo aprendido durante el curso.
 *
 * Requisitos:
 *
 * 1. Crear un type llamado Usuario.
 *
 * Debe contener:
 *
 * - id
 * - nombre
 * - edad
 * - activo
 *
 * 2. Crear un arreglo tipado de usuarios.
 *
 * 3. Crear una función para agregar usuarios (uso del push).
 *
 * 4. Crear una función para buscar un usuario por su id (uso del find).
 *
 * 5. Crear una función para mostrar únicamente los usuarios activos (uso del filter).
 *
 * 6. Mostrar el arreglo final.
 */


export {};