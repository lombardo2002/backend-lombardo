class Usuario {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = []
    }
    getFullName = () =>{
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
    }
    addMascota=(animal)=>{
    return this.mascotas.push(animal);
    }
    countMascota = () =>{
        return this.mascotas.length;
    }
    addBook = (nameBook, escritor) =>{
        let objeto = {nombre:nameBook, autor:escritor}
        this.libros.push(objeto)
    }
    getBookNames = () =>{
        console.log(`los libros que pertenecen a ${this.nombre} son los siguientes:`);
        this.libros.map(elementos=>{
            console.log(`${elementos.nombre}`);
        })
    }
}


const persona1 = new Usuario("Agustina","Venecia");
const persona2 = new Usuario("Jorge", "Paz");

persona1.getFullName();
persona2.getFullName();

persona1.addMascota("perros");
persona2.addMascota("perro");
persona1.addMascota("gallinas");
persona2.addMascota("gatos");
persona1.addMascota("coballos");

const contadorAnimal1 = persona1.countMascota();
const contadorAnimal2 = persona2.countMascota();

console.log(`${persona1.nombre} tiene ${contadorAnimal1} mascotas`);
console.log(`${persona2.nombre} tiene ${contadorAnimal2} mascotas`);

persona1.addBook("Poder Sin Limites","Anthony Robbins")
persona2.addBook("Los Cuatro Acuerdos","Dr. Miguel Ruiz")
persona1.addBook("Nosotros en la Luna","Alice Kellen")
persona2.addBook("Harry Potter y la orden de Fénix","J.K. Rowling")
persona2.addBook("Harry Potter y las Reliquias de la Muerte","J.K. Rowling")

persona1.getBookNames();
persona2.getBookNames();
