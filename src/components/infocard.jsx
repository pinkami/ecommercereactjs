import React from 'react';

const Infocard = () => {
    return (
        <>
            <div className="card-box" >
                <div className="row g-0  bg-color">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">FORMAS DE PAGO</h5>
                            <p className="card-text">Tenes hasta 6 cuotas sin interes pagando con VISA debito o Master Card y si abonas en efectivo tenes un descuento del 10%.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://www.65ymas.com/uploads/s1/31/00/99/los-tele-fonos-mo-viles-ma-s-innovadores-de-este-2020-samsung-galaxy-s20-y-s20.jpeg" className="img-fluid rounded-start imgCard" alt="#" />
                    </div>
                </div>
                <div className="row g-0 bg-color">
                    <div className="col-md-4">
                        <img src="https://i.blogs.es/d7d3cb/iphone-11-cargador-5w/840_560.jpg" className="img-fluid rounded-start imgCard" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">KITS QUE INCLUYE</h5>
                            <p className="card-text">-Un cargador y cable portatil.</p>
                            <p className="card-text">-Funda y vidrio templado.</p>
                            <p className="card-text">-Auriculares originales.</p>
                            <p className="card-text"><small className="text-dark"> Algunos cargadores no tienen garantia.</small></p>
                        </div>
                    </div>
                </div>
                <div className="row g-0  bg-color">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">RECIBIMOS USADOS</h5>
                            <p className="card-text">El pago se abona al precio dolar o en pesos al tipo de cambio libre/blue. Recibimos tu usado en parte de pago,valorado en precio dolar del momento.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="https://comparaplano.com.br/wp-content/uploads/2019/10/iphone-11-1.jpg" className="img-fluid rounded-start imgCard" alt="" />
                    </div>
                </div>
                <div className="row g-0 bg-color">
                    <div className="col-md-4">
                        <img src="https://media.revistagq.com/photos/61f8f95f4332382a235bcac9/4:3/w_800,h_600,c_limit/iPhone-14.jpeg" className="img-fluid rounded-start imgCard" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">REALIZA TU TRASPASO</h5>
                            <p className="card-text">Si realizas un respaldo del iPhone tendrás una copia de tu información para que puedas usarla en caso de que pierdas, dañes o reemplaces el dispositivo.</p>
                            <p className="card-text"><small className="text-dark ">No tiene los mismos beneficios otras marcas de telefonos</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Infocard;
