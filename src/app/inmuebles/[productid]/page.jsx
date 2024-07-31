"use client"
import { useFilters } from "@/context/productosfetch";
import { CardItemComponents , Otro} from "@/components/carditem";
import "./item.css"
export default function CardItem ({params}) {
    const id = params.productid
    const {result} = useFilters();


    const item = result.find((inmueble) => inmueble.id === parseInt(id));
    return (
        <div style={{height: "250vh", display: "flex", justifyContent: "start", alignItems: "center" , "flexDirection": "column" , alignItems: "center", gap: "5vh"}}>
            <div className="card">
                <CardItemComponents item={item} />
            </div>
            <Otro item={item}/>
        </div>
    )
}