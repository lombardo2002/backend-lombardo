const Contenedor= require("./contenedor");
const contenedor= new Contenedor();


let prod={
    producto: "Pate/Picadillo",
    precio: "100",
    img:"https://cdn11.bigcommerce.com/s-abmjjefojj/images/stencil/1280x1280/products/2187/13684/Swift-Productos-Argentina_Select-1000x1000__31980.1614881847.jpg?c=1&imbypass=on"
};

contenedor.AgregarProducto(prod).then((res)=>{
    console.log(res);
});

//contenedor.leerProd().then((res)=>{
//    console.log(res);
//})

//contenedor.deleteById(2).then((res)=>{
//    console.log(res)
//})

//contenedor.getById(1).then((res)=>{
//console.log(res)
//})

//contenedor.deleteAll().then((res)=>{
//    console.log(res)
//})