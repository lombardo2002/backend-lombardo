import express from 'express';
import fs from 'fs';

const app = express();

const server = app.listen(8080,()=>console.log("te escucho servidor express :)"))

const returnProducts = (route) => {
    if (fs.existsSync(route)) {
        let data = fs.readFileSync(route, 'utf-8')
        let producto = JSON.parse(data)
        return producto;
    } else {
        return {
            status: "Error",
            message: "No route found"
        }
    }
}

app.get('/productos', (request, response) => {              
    response.send(returnProducts('./productos.json'))
})
app.get('/productoRandom', (request, response) => {         
    let prod = returnProducts('./productos.json')
    let numRandom = parseInt(Math.random() * prod.length)
    if (!prod.status) {
        response.send(producto[numRandom])
    } else {
        response.send(prod)
    }
})
app.get('/producto/:idProd', (request, response) => {    
    const id = request.params.idProd
    let prods = returnProducts('./productos.json')
    let prod = prods.find((prod) => prod.id == id);
    if (prod) {
        return {
            status: "Success",
            prod: response.send(prod)
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
