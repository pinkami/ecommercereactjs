import React from 'react';

const Card = ({marca,modelo,imagen,detalle}) => {

    return (
        <div className='conteiner-phone'>
            <div>
                <img src={imagen} alt="#" className='box-img' />
            </div>
            <h3 className='title-h3-card'>{marca}</h3>
            <h5 className='title-five'>$ {modelo}</h5>
            <p className='parraf-card-link'>{detalle}</p>
        </div>
    );
}

export default Card;
