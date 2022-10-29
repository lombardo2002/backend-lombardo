import http from 'http'; 

const server = http.createServer((peticion,respuesta)=>{
    respuesta.end('Hola')
})

const connectedServer = server.listen(8080,()=>{
    console.log("primer servidor escuchando")
})
