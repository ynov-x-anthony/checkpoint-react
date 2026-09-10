import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Macaron from "../components/Macaron";

type AccessoryArray = { id: number; name: string; slug: string }[];

function MacaronList() {
    const [macarons, setMacarons] = useState<MacaronArray>([]);
    const [accessories, setAccessories] = useState<AccessoryArray>([]);
    const [selectedAccessory, setSelectedAccessory] = useState<string>("");

    useEffect(() => {
        fetch(`http://localhost:3310/api/macarons`)
            .then((response) => response.json())
            .then((data: MacaronArray) => setMacarons(data))
            .catch((error) => console.error("Erreur macarons :", error));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3310/api/accessories`)
            .then((response) => response.json())
            .then((data) => setAccessories(data as AccessoryArray))
            .catch((error) => console.error("Erreur accessoires :", error));
    }, []);

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
                    <select
                        id="macaron-select"
                        value={selectedAccessory}
                        onChange={(e) => setSelectedAccessory(e.target.value)}
                    >
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
                {filteredMacarons.map((macaron) => (
                    <li className="macaron-item" key={macaron.id}>
                        <Link to={`/macarons/${macaron.id}`}>
                            <Macaron data={macaron} />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MacaronList;