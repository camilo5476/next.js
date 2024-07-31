
import { createContext, useState, useContext, useEffect } from "react";
import { db } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
    const [result , setResult] = useState([]);
    const [dataCuenta, setDataCuenta] = useState([]);
    useEffect(() => {
        console.log("11111111111111111");
        const dataInmuebles = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "inmuebles"));

                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data() });
                });
                setResult(docs);
            } catch (error) {
                console.log(error);
            }
        }

        dataInmuebles();

        const dataCuentas = async () => {
            console.log("222222222222222222");
            try {
                const querySnapshot = await getDocs(collection(db, "infocuenta"));
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                setDataCuenta(docs);
            } catch (error) {
                console.log(error);
            }
        }

        dataCuentas();
    }, []);
    return (
        <FiltersContext.Provider value={{result ,setResult,  dataCuenta }}>
            {children}
        </FiltersContext.Provider>
    );
};

export function useFilters() {
    const context = useContext(FiltersContext);
    if (!context) {
        throw new Error("useFilters debe usarse dentro de un FiltersProvider");
    }
    return context;
}