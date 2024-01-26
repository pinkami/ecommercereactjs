import React from 'react';

const Contacto = () => {
    return (
        <div className='container-form-father'>
            <form className='container-form'>
                <div className='box-title-form'>
                    <h2 className='title-form'>CONTACTO</h2>
                </div>
                <input type="text" placeholder='Nombre' />
                
                <div>
                    <input type="email" placeholder='Correo electronico' />
                </div>
                <div>
                    <input type="tel"placeholder='Numero de telefono' />
                </div>
                <div>
                    <textarea cols="30" rows="10" placeholder='Comentario'></textarea>
                </div>
                <input type="submit" name='enviar'/>
            </form>
        </div>
    );
}

export default Contacto;

