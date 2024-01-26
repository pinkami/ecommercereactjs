import React from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import CartDetail from './CartDetail'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { serverTimestamp,doc, setDoc, collection,updateDoc, increment } from 'firebase/firestore';
import {db}  from '../utils/firebaseConfig';

const Cart = () => {

    const {carrito,clearAll,sumaTotal} = useContext(CartContext);

    //esta funcion se ejecuta al hacer click en finalizar compra.
    const createOrder =async()=>{

        let itemsForDB=carrito.map(item=>({
            id:item.id,
            precie:item.precie,
            title:item.name,
            quantity:item.cantidad,
        }))
        
        let order ={
            cliente:{
                name:"Juan Perez",
                email: "perezcosta@gail.com",
                phone: 11309485820
            },
            date:serverTimestamp(),
            items:itemsForDB,
            total: sumaTotal(),
        }

        //le genera un id en la base de datos,el collection hace que se ejecute en orden la funcion asincronica.
        const newOrderRef =doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);// crea la orden en la base de datos

        carrito.forEach( async (item) => {
            //actualiza el stock de la base de datos en firestore.
            const stockRef = doc(db, "products",item.id);
            
            await updateDoc(stockRef, {
                quantity: increment(-item.cantidad)
            });
        });
        
        clearAll()

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Compra Finalizada!',
            showConfirmButton: false,
            timer: 2000
        })
    }
    
    if(carrito.length===0){
        return(
            <div className='container-cart-vacio'>
                <h1 className='title-cart-vacio'>Tu carrito esta vacio</h1>
                <img className='picture-cart-vacio' src="https://paisajesespanoles.es/images/emptycart.png" alt="un carrito vacio" />
            </div>
        ) 
    }

    return (
        <>
            <h2 className='titleCart'>Carrito de Compras</h2>
            <button className='btn-primary btn-vaciar-cart' onClick={clearAll}>Vaciar Carrito</button>
            <div className='container-cart-detail'>
                <div>
                    <h5>producto</h5>
                </div>
                <div>
                    <h5>nombre</h5>
                </div>
                <div>
                    <h5>detalle</h5>
                </div>
                <div>
                    <h5>cantidad</h5>
                </div>
                <div>
                    <h5>total</h5>
                </div>
                <div>
                    
                </div>
            </div>
            {
                carrito.map(item =>(        
                    <CartDetail
                    key={item.id}
                    img={item.image}
                    nombre={item.name}
                    detalle={item.description}
                    cantidad={item.cantidad}
                    total={item.cantidad*item.precie}
                    eliminar={item.id}
                    />
                ))
            }
            <div className='caja-factura-cart'>
                <div className='caja-envio'>
                    <h5>Entrega</h5>
                    <p>Los envios son de lunes a viernes de 10 a 18 hs.</p>
                    <Link className='link-volver' to="/category/10">Seguir Comprando</Link>
                </div>
                <div className='caja-comprar-dos'>
                    <p>subtotal: ${sumaTotal()}</p>
                    <p>precio total: ${sumaTotal()} </p>
                    <button onClick={createOrder} className='div-checkout btn bg-primary'>Finalizar Compra</button>
                </div>
            </div>
        </>
    );
}

export default Cart;
