import React from 'react';
import { createContext,useState } from "react";

//el createContext lo pongo en una const y ademas lo exporto pára usarla en todos los componentes.
export const CartContext = createContext();

//esta funcion la paso como value al CartContext,para que sea una funcion global y todos mis componentes lo puedan usar
const CartContextProvider = ({children}) => {

    //creo al carrito como un estado,arranca con un array vacio.
    const [carrito, setCarrito] = useState([]); 
    const agregarProducto=(item,cantidad)=>{

        item.cantidad= cantidad; //creo un nuevo propiedad del objeto item.
        //si ya existe un producto en el array le aumenta la cantidad,sino agrega el item.
        if (isInCart(item.id)) {
            const indiceItem = carrito.findIndex(elem=>elem.id === item.id);
            carrito[indiceItem].cantidad = carrito[indiceItem].cantidad + cantidad; 
            setCarrito([...carrito]);
        } else {
            setCarrito([
                ...carrito, //el valor inicial son los datos que ya tenia "carrito".
                item //y luego se le agrega otro producto.
            ])
        }
    }
    const clearAll=()=>{
        setCarrito([]);
    }
    const removeItem=(id)=>{ //elimina a un producto del array
        const deleteItem = carrito.filter(item=>item.id !== id)
        setCarrito(deleteItem);
    }
    const isInCart=(id)=>{
        //me devuelve true o false si existe item en el carrito.
        return carrito.some(prod => prod.id === id);
    }
    const sumaTotal=()=>{
        return carrito.reduce((inicial,item) => inicial + item.cantidad * item.precie,0);
    }
    const sumaCantidad=()=>{
        return carrito.reduce((start,prod)=> start + prod.cantidad,0);
    }
    return (
        <CartContext.Provider value={{carrito,agregarProducto,clearAll,removeItem,sumaTotal,sumaCantidad}}> 
            {children}
        </CartContext.Provider>
    );
} 

export default CartContextProvider;
