import { useState, useEffect } from "react";
import Macaron from "../components/Macaron";

function MacaronList() {
    // Step 1: get all macarons
    const [macarons, setMacarons] = useState<MacaronArray>([]);

    useEffect(() => {
        fetch("http://localhost:3310/api/macarons")
            .then((response) => response.json())
            .then((data) => {
                setMacarons(data);
                console.info("Macarons récupérés :", data);
            })
            .catch((error) => console.error("Erreur fetch :", error));
    }, []);

    // Step 3: get all accessories

    // Step 5: create filter state

    return (
        <>
            <h1>My macarons</h1>
            <form className="center">
                <label htmlFor="macaron-select">
                    {/* Step 5: use a controlled component for select */}
                    Filter by{" "}
                    <select id="macaron-select">
                        <option value="">---</option>
                        {/* Step 4: add an option for each accessory */}
                    </select>
                </label>
            </form>
            <ul className="macaron-list" id="macaron-list">
                {/* Step 2: repeat this block for each macaron */}
                {/* Step 5: filter macarons before repeating */}
                {macarons.map((macaron) => (
                    <li key={macaron.id} className="macaron-item">
                        <Macaron data={macaron} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MacaronList;