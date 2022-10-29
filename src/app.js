import express from 'express';
import moment from 'moment/moment';

const app = express();

const server = app.listen(8080,()=>console.log("te escucho servidor express :)"))

const returnProductos = (route) => {
    if (fs.existsSync(route)){
        let data = fs.readFileSync(route, "utf-8")
        let products = JSON.parse(data)
        return products;
    }else{
        return{
            status: "Error",
            message:"No route found"
        }
    }
}

app.get('/productos', (req, res) => {
    res.send(returnProductos('./productos.json'))
})

app.get('./productoRandom', (req, res)=>{
    const id = request.params.idProduct
    let productos = returnProductos('./productos.json')
    let producto = productos.find((producto)=> producto.id == id);
    if (producto){
        return{
            status: "success",
            producto: res.send(producto)
        }
    } else {
        response.send({
            status: "Error",
            message: "Product not fount"
        })
    }
})
//let contador = 0;

//app.get('/',(req, res)=>{
//    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
//})

//app.get('/visitas',(req,res)=>{
//    contador++;
//    res.send(`La cantidad de visitas es: ${contador}`)
//})

//app.get('/fyh',(req,res)=>{
//    res.send({ fyh:moment().format('DD/MM/YYYY hh:mm:ss')});
//})