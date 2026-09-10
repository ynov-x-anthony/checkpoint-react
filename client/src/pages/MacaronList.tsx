import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

type AccessoryArray = { id: number; name: string; slug: string }[];

function MacaronList() {
    // Step 1: get all macarons from API
    const [macarons, setMacarons] = useState<MacaronArray>([]);

    useEffect(() => {
        fetch(`http://localhost:3310/api/macarons`)
            .then((response) => response.json())
            .then((data: MacaronArray) => {
                setMacarons(data);
            })
            .catch((error) => console.error("Erreur macarons :", error));
    }, []);

    // Step 3: get all accessories from API
    const [accessories, setAccessories] = useState<AccessoryArray>([]);

    useEffect(() => {
        fetch(`http://localhost:3310/api/accessories`)
            .then((response) => response.json())
            .then((data) => {
                const typedData = data as AccessoryArray;
                setAccessories(typedData);
            })
            .catch((error) => console.error("Erreur accessoires :", error));
    }, []);

    // Step 5: filter state
    const [selectedAccessory, setSelectedAccessory] = useState<string>("");

    const filteredMacarons = macarons.filter((macaron) => {
        if (selectedAccessory === "") return true;
        return String(macaron.accessory_id) === selectedAccessory;
    });

    return (
        <>
            <h1>My macarons</h1>
            <form className="center">
                <label htmlFor="macaron-select">
                    Filter by{" "}
                    {/* Step 5: controlled select */}
                    <select
                        id="macaron-select"
                        value={selectedAccessory}
                        onChange={(e) => setSelectedAccessory(e.target.value)}
                    >
                        <option value="">---</option>
                        {/* Step 4: map accessories state to options */}
                        {accessories.map((accessory) => (
                            <option key={accessory.id} value={accessory.id}>
                                {accessory.name}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <ul className="macaron-list" id="macaron-list">
                {/* Step 2: repeat this block for each macaron */}
                {/* Step 5: filter macarons before repeating */}
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