import React from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const CartDetail = ({img,nombre,detalle,cantidad,total,eliminar}) => {

    const {removeItem}= useContext(CartContext);

    return (
        <div className='container-cart-detail'>
            <div>
                <img className='img-cart' src={img} alt="foto de productos"/>
            </div> 
            <div>
                <p>{nombre}</p>
            </div>
            <div>
                <p>{detalle}</p>
            </div>
            <div>
                <p>{cantidad}</p>
            </div>
            <div>
                <p>$ {total}</p>
            </div>
            <div>
                <button className='btn btn-danger' onClick={()=>{removeItem(eliminar)}}>eliminar</button>
            </div>
        </div>
    );
}

export default CartDetail;
