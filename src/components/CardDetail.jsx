import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from './CartContext';

const CardDetail = ({imagen,marca,detalle,precio,stock,objeto}) => {
    
    //llamo los valores del cartContext que quiero usar.
    const {agregarProducto,carrito}=useContext(CartContext);

    //la funcion addCart viene con un parametro(number),a ese parametro le pasamos como un estado de setvariable y permite cambiarlo
    const addCart=(cantidad)=>{
        
        Swal.fire(
            'Listo',
            'Producto agregado al carrito',
            'success'
        )

        //paso a la funcion como prop. cantidad y objeto, y me trae a todo el producto agregado.
        agregarProducto(objeto, cantidad) 
    }

    return (
        <div className='container-detail'>
            <div className='container-picture-detail'>
                <img className='box-img-detailcard' src={imagen} alt="#"/>
            </div> 
            <div className='container-children-detail'>
                <h2>{marca}</h2>
                <h3>{detalle}</h3>
                <p>stock:{stock} unidades</p>
                <p className='text-precie'>$ {precio}</p>
                <p>+ Consulte la garantia de su dispositivo </p>
                <p>+ Los telefonos incluye cargador y cable</p>
                <p>+ Tomamos tu usado como parte de pago</p>
                {
                    //si en el carrito en nombre del producto ya esta agregado,me muestre ir al carrito 
                    carrito.some(item=>item.name === marca)
                    ?<h4><Link to="/carrito">Ver carrito</Link></h4>
                    //de lo contrario que me permita agregar el producto.
                    :<ItemCount
                        stock={stock}
                        addCart={addCart} //paso como otra prop una funcion que se ejecuta,en ItemCount.
                    />
                }
            </div>
        </div>
    );
}

export default CardDetail;
