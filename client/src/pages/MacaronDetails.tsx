import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Macaron from "../components/Macaron";

function MacaronDetails() {
    const { id } = useParams<{ id: string }>();
    const [macaron, setMacaron] = useState<Macaron | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:3310/api/macarons/${id}`)
            .then((response) => response.json())
            .then((data: Macaron) => setMacaron(data))
            .catch((error) => console.error("Erreur macaron :", error));
    }, [id]);

    if (!macaron) {
        return <p>Chargement...</p>;
    }

    return (
        <>
            <h1>{macaron.name}</h1>
            <Macaron data={macaron} />
        </>
    );
}

export default MacaronDetails;