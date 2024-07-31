"use client";
import { Slider } from "./slider";


export const Otro = ({item}) => {
    return (
        <div className="mas-info">
            <h1>otro</h1>
        </div>
    )
}
export const CardItemComponents = ({item}) => {
    const {title, price, area, estrato, images, description, ubicacion, category, banos, habitaciones, id, infocontacto} = item

    return (
        <>
            <div className="card-inmueble">
                <Slider images={images} />
                <div className="card-inmueble__info">
                    <h3>Price: {price}</h3>
                    <div className="card-inmueble__specifications">
                        <h3>Especificaciones</h3>
                        <ul>
                            <li>Estrato: {estrato}</li>
                            <li>Área: {area} m²</li>
                        </ul>
                    </div>
                    <p>author/propietario del inmueble</p>
                </div>
            </div>
        </>
    );
}