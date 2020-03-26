import React from 'react'
import './Footer.css'
import qr from './Imagenes/qr.png'
function Footer() {
    return (
        <div className=" d-flex align-items-center justify-content-between navbar-dark bg-dark text-white py-5">
            <div className="pl-5 d-none d-md-block">
                <a class="navbar-brand" href="#">LogoCorporativo</a>
            </div>

            <div className="MedioFooter d-flex pl-5">
                <ul>
                    <li className="text-center pb-2">Sobre Nosotros</li>
                    <a href=""><li>Preguntas Frecuentes</li></a>
                    <a href=""> <li>Contactos</li></a>
                    <a href=""> <li>Trabaja Con Nosotros</li></a>
                    
                </ul>

                <ul className="mx-5 d-none d-md-block">
                    <li className="text-center pb-2">Explora TVS</li>
                    <a href=""><li>BLOG</li></a>
                    <a href=""> <li>PRENSA</li></a>
                    <a href=""> <li>CONTACTO</li></a>
                   
                </ul>

                <ul className="d-none d-md-block">
                    <li className="text-center pb-2">INFORMACION UTIL</li>
                    <a href=""><li>Contacto y Ayuda</li></a>
                    <a href=""> <li>Consejos de Seguridad</li></a>
                    <a href=""> <li>Termino y Condiciones</li></a>
             
                </ul>

                <ul className="ml-5">
                    <li className="text-center pb-2">Lo Mas Buscado</li>
                    <a href=""><li>Publicar GRATIS</li></a>
                    <a href=""> <li>Vende mas rapido</li></a>
                    <a href=""> <li>Todos los Avisos</li></a>
                   
                </ul>
            </div>

            <div className="qrfoot d-none d-md-block">
                <img src={qr}></img>
            </div>

        </div>
    )
}
export default Footer;