import React from 'react'
import './Menu.css'
function Menu() {
    return (
        <>
        <div className="Menu1 text-white d-flex align-items-center">
            <div className="col-md-4 col-sm-12 ml-auto">
                <div className="bordes p-4">
                    <h1 className="text-center">Historia</h1>
                    <p>
                    Harley-Davidson, H-D, o Harley, es un fabricante estadounidense de motocicletas fundado en 1903 en Milwaukee, Wisconsin. 
                    Fue uno de los dos principales fabricantes de motocicletas estadounidenses que sobrevivió a la Gran Depresión,
                     junto a la compañía Indian Motorcycle. 
                </p>
                </div>


            </div>

        </div>

        <div className="Menu2 text-white d-flex align-items-center">
            <div className="col-md-4 col-sm-12  ml-auto">
                <div className="bordes p-4">
                    <h1 className="text-center">Road Glide Ultra</h1>
                    <p>
                    Por sus características mecánicas, la Road Glide Ultra es una gran moto para viajar, para ello monta un poderoso motor Milwaukee-Eight 114, novedad en 2019, 
                    y que es el más potente que nunca se ha utilizado en la gama Touring. Cubica 1.868 cc y destaca por su alta cifra de par y su suavidad de funcionamiento, 
                    así como por la baja rumorosidad del cambio y su preciso accionamiento.
                     </p>
                </div>


            </div>

        </div>

        <div className="Menu3 text-white d-flex align-items-center">
            <div className="col-md-4 col-sm-12  ml-auto">
                <div className="bordes p-4">
                    <h1 className="text-center">Nuevos Modelos</h1>
                    <p>
                    La nueva era anunciada por Harley Davidson pasa por nuevos modelos que exploran segmentos de las motos 
                    como las naked deportivas o las motos trail y las eléctricas, nunca explorados por la firma norteamericana.
                     Estos son los prototipos anunciados por Harley Davidson.
                     </p>
                </div>


            </div>

        </div>

        </>
    )
}
export default Menu;