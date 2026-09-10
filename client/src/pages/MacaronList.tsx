import { useState, useEffect } from "react";
import Macaron from "../components/Macaron";

type AccessoryArray = { id: number; name: string; slug: string }[];

function MacaronList() {
    // Step 1: get all macarons
    const [macarons, setMacarons] = useState<MacaronArray>([]);

    useEffect(() => {
        fetch("http://localhost:3310/api/macarons")
            .then((response) => response.json())
            .then((data) => {
                setMacarons(data);
            })
            .catch((error) => console.error(error));
    }, []);

    // Step 3: get all accessories
    const [accessories, setAccessories] = useState<AccessoryArray>([]);

    useEffect(() => {
        fetch("http://localhost:3310/api/accessories")
            .then((response) => response.json())
            .then((data) => {
                setAccessories(data as AccessoryArray);
            })
            .catch((error) => console.error(error));
    }, []);

    // Step 5: create filter state
    const [selectedAccessory, setSelectedAccessory] = useState<string>("");

    const filteredMacarons = selectedAccessory === ""
        ? macarons
        : macarons.filter(macaron => macaron.accessory_id === selectedAccessory);

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
                            <option key={accessory.id} value={accessory.id.toString()}>
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
                    <li key={macaron.id}  className="macaron-item">
                        <Macaron data={macaron} />
                    </li>
                ))}
                {/* end of block */}
            </ul>
        </>
    );
}

export default MacaronList;