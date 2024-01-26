import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock,addCart}) => {

    const [number, setstate] = useState(0);
    
    const addNumber=()=>{
        if (number<stock) {
            setstate(number+1);
        }
    }
    const reduceNumber=()=>{
        if (number>0) {
            setstate(number-1);
        }
    }
    return (
        <>
            <div className='box-button-father'>
                <p>Cantidad</p>
                <div className='box-button'>
                    <button className='button-Count' onClick={addNumber}>+</button>
                    <div className='box-cantidad'>{number}</div>
                    <button className='button-Count' onClick={reduceNumber}>-</button>
                </div>
            </div>
            <div>
                <button className='btn btn-danger' disabled={number===0} onClick={()=>{addCart(number)}}>Agregar al carrito</button>
                {/* a la funcion addCart la paso con parametro que es number y eso permite cambiar su valor en cardDetail */}
            </div>
        </>
    );
}

export default ItemCount;
