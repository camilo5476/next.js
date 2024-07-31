"use client";
import { useVariables } from "@/context/variablesEstado";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFilters } from "@/context/productosfetch";

export const CardInmuebles = () => {
    const { result } = useFilters();
    const [ final, setFinal ] = useState([]); 
    const { datafiltacion } = useVariables();
    
    useEffect(() => {
        if (datafiltacion && datafiltacion.length > 0) {
            setFinal(datafiltacion);
        } else {
            setFinal(result);
        }
    }, [datafiltacion, result]);

    return (
        <>
            {final && final.map((inmueble) => (
                <Link href={`/inmuebles/${inmueble.id}`} key={inmueble.id}>
                    <div className="cards">
                        <h3 className="card-category">{inmueble.category}</h3>
                        <div className="card-inmueble__image">
                            <img src={inmueble.images[0]} alt={inmueble.title} width={500} height={300} />
                        </div>
                        <div className="card-inmueble__info">
                            <h3 className="card-price">Price: {inmueble.price}</h3>
                            <div className="card-inmueble__specifications">
                                <h3>Especificaciones</h3>
                                <ul>
                                    <li>Estrato: {inmueble.estrato}</li>
                                    <li>Área: {inmueble.area} m²</li>
                                </ul>
                            </div>
                            <p className="card-author">Author: &apos;author/propietario del inmueble&apos;</p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};
