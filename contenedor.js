const fs = require("fs");

const infoJson = "./productos.json";

class Contenedor {
    AgregarProducto= async (producto) => {
        if(!producto.producto || !producto.precio || !producto.img){
            return {
                status: "error",
                message:"Hay campos incompletos"
            };
        }try{
                if(fs.existsSync(infoJson)){
                    let data = await fs.promises.readFile(infoJson, "utf-8");
                    let productos = JSON.parse(data);
                    let id = productos.length +1;
                    producto.id=id;
                    productos.push(producto);
                    await fs.promises.writeFile(infoJson, JSON.stringify(productos, null, 2));
                    return{
                        status:"success",
                        message: "Se agrego un producto con exito"
                    };
                }else{
                    producto.id= 1;
                    await fs.promises.writeFile(
                        infoJson,
                        JSON.stringify([producto], null, 2)
                    );
                }
            }catch(error){
                return{
                    status: "error",
                    message: error.message
                };
            }
        };

        leerProd= async()=>{
            try{
                if(fs.existsSync(infoJson)){
                    let data= await fs.promises.readFile(infoJson, "utf-8");
                    let productos = JSON.parse(data);
                    return{
                        status: "success",
                        productos:productos,
                    };
                }else{
                    return{
                        status: "error",
                        message: "No se encontraron productos"
                    };
                }
                }catch(error){
                    return{
                        status:"error",
                        message: error.message,
                    };
                }
            }

            getById= async(id)=>{
                if(!id){
                    return{
                        status:"error",
                        message:"Es necesario un id"
                    };
                }
                if(fs.existsSync(infoJson)){
                    let data= await fs.promises.readFile(infoJson, "utf-8");
                    let productos= JSON.parse(data);
                    let producto= productos.find((producto)=> producto.id == id);
                    if(producto){
                        return{
                            status: "success",
                            producto: producto,
                        };
                    }else{
                        return{
                            status: "error",
                            message:"El producto no fue encontrado",
                        };
                    }
                } else{
                    return{
                        status:"error",
                        message:"No se encontraron productos",
                    };
                }
            };

            deleteById= async(id)=>{
                if(!id){
                    return{
                        status:"error",
                        message:"Es necesario un id"
                    };
                }
                if(fs.existsSync(infoJson)){
                    let data= await fs.promises.readFile(infoJson, "utf-8");
                    let productos= JSON.parse(data);
                    let nuevoProd= productos.filter((producto)=>producto.id != id);
                    await fs.promises.writeFile(
                        infoJson,
                        JSON.stringify(nuevoProd, null, 2)
                );
                return{
                    status:"success",
                    message:"Producto eliminado",
                };
                }else{
                    return{
                        status:"error",
                        message:"No se encontraron productos",
                    };
                };
            };

            deleteAll= async()=>{
                if(fs.existsSync(infoJson)){
                    let data= await fs.promises.readFile(infoJson, "utf-8");
                    let productos= JSON.parse(data)
                    let eliminarProductos= productos= []
                    await fs.promises.writeFile(
                        infoJson,
                        JSON.stringify(eliminarProductos, null, 2)
                    );
                    return{
                        status: "success",
                        message: "Se eliminaron todos los productos",
                    }
                }else{
                    return{
                        staus:"error",
                        message:"No se eliminaron los productos"
                    }
                }
            }
        }

        module.exports = Contenedor;


