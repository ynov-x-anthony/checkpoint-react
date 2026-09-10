import { useState, useEffect } from "react";
import Macaron from "../components/Macaron";

type AccessoryArray = { id: number; name: string; slug: string }[];

function MacaronList() {
    // Step 1: get all macarons
    const [macarons, setMacarons] = useState<MacaronArray>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/macarons")
        .then((res) => res.json())
        .then((data) => setMacarons(data));

    fetch("http://localhost:3310/api/accessories")
        .then((res) => res.json())
        .then((data) => {
            setAccessories(data as AccessoryArray);
            console.info("Accessoires récupérés :", data);
        })
        .catch((err) => console.error(err));
}, []);

    // Step 3: get all accessories
	const [accessories, setAccessories] = useState<AccessoryArray>([]);
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
                        {accessories.map((accessory) => (
                            <option key={accessory.id} value={accessory.id}>
                                {accessory.name}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <ul className="macaron-list" id="macaron-list">
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