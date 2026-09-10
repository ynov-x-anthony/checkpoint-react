import { useState, useEffect } from "react";
import Macaron from "../components/Macaron";


function MacaronList() {
    // Step 1: get all macarons
    const [macarons, setMacarons] = useState<MacaronArray>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3310"}/api/macarons`)
            .then((res) => res.json())
            .then((data: MacaronArray) => {
                setMacarons(data);
            })
            .catch((error) => {
                console.error("Erreur fetch macarons :", error);
            });
    }, []);

    // Step 3: get all accessories
    const [accessories, setAccessories] = useState<any[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3310"}/api/accessories`)
            .then((res) => res.json())
            .then((data) => {
                setAccessories(data);
            })
            .catch((error) => {
                console.error("Erreur fetch accessories :", error);
            });
    }, []);

    // Step 5: create filter state
    const [selectedAccessory, setSelectedAccessory] = useState<string>("");

    // Step 5: filtrer la liste selon l'accessoire sélectionné
    const filteredMacarons = macarons.filter((macaron) => {
        if (selectedAccessory === "") {
            return true;
        }
        return String(macaron.accessory_id) === String(selectedAccessory);
    });

    return (
        <>
            <h1>My macarons</h1>
            <form className="center">
                <label htmlFor="macaron-select">
                    {/* Step 5: use a controlled component for select */}
                    Filter by{" "}
                    <select
                        id="macaron-select"
                        value={selectedAccessory}
                        onChange={(e) => setSelectedAccessory(e.target.value)}
                    >
                        <option value="">---</option>
                        {/* Step 4: add an option for each accessory */}
                        {accessories.map((accessory) => (
                            <option key={accessory.id} value={accessory.id}>
                                {accessory.name || accessory.accessory || accessory.label || accessory.id}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <ul className="macaron-list" id="macaron-list">
                {/* Step 2 & 5: mapping sur la liste filtrée */}
                {filteredMacarons.map((macaron) => (
                    <li className="macaron-item" key={macaron.id}>
                        <Macaron data={macaron} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MacaronList;