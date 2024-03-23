import {useEffect, useState} from "react";

export const usePersonalDB = () => {
    const [personal, setPersonal] = useState([]);
    const [isLoading, setLoading] = useState(true); // Estado para controlar la carga

    async function fetchData() {
        // Simular un retraso de 1.5 segundos
        // await new Promise((resolve) => setTimeout(resolve, 1500));

        const result = await fetch(
            "https://simplerestaurant-api-production.up.railway.app/api/employees"
        ).then((response) => response.json());
        setPersonal(result);
        setLoading(false); // Una vez que se cargan los datos, establece loading en false
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {personal, isLoading};
};
