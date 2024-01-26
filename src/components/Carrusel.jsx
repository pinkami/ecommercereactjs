import React from 'react';

const Carrusel = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/KVPOVMTXVJDYLDUKF54KKPIG5I.webp" className="d-block w-100" alt="#" />
                    </div>
                </div>
            </div>
            <div className='box-intro'>
                <h1 className='titulo'>Tenemos Stock actualizados</h1>
                <p className='text'>Podes visualizar y comparar precios de acuerdo a estandares de calidad,recibimos tu usados como parte de pago,podes cambiar entre telefonos de distintas marcas.</p>
            </div>
        </>
    );
}

export default Carrusel;
