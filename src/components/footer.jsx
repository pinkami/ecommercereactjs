import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className='conteiner-footer'>
                <div>
                    <h3 id='titleFooter'>Estamos ubicados en Tigre</h3>
                    <p>Retiralo o coordina un envio</p>
                </div>
                <div className='footer-father'>
                    <div className='box-children'>
                        <h4>HORARIOS</h4>
                        <p>Estamos abiertos de lunes a viernes de 8:00 a 19:00 hs.</p>
                        <p>Los fines de semana atendemos el sabado de 8:00 a 14:00 hs.</p>
                    </div>
                    <div className='box-children'>
                        <h4>GARANTIA</h4>
                        <p>Tenes una garantia de 6 meses una vez realizado la compra,brindamos soporte tecnico ante un mal funcionamiento del dispositivo</p>
                    </div>
                    <div className='box-children'>
                        <h4>SEGUINOS</h4>
                        <p>Informate sobre nuestros productos o descuentos en:</p>
                        <p>Facebook: TiendaCelulares</p>
                        <p>Instagram: @phonestore</p>
                    </div>
                    <div className='box-children'>
                        <h4>RESERVA DE TURNOS</h4>
                        <p>Podes comunicarte y reservar un turno al Whatsapp(+54 11 93499-3928398) en horarios de atencion al cliente</p>
                    </div>
                </div> 
                <p>@copyright derechos reservado</p>
            </footer>
        </>
    );
}

export default Footer;
