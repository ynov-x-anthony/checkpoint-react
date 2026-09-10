import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Macaron from "../components/Macaron";

type MacaronArray = {
    id: number;
    accessory_id: string;
    accessory: string;
    color1: string;
    color2: string;
    color3: string;
    name: string;
}[];

type AccessoryArray = {
    id: number;
    name: string;
    slug: string;
}[];

function MacaronList() {

    const [macarons, setMacarons] = useState<MacaronArray>([]);

    const [accessories, setAccessories] = useState<AccessoryArray>([]);

    const [selectedAccessory, setSelectedAccessory] = useState<string>("");

    useEffect(() => {
        fetch("http://localhost:3310/api/macarons")
            .then((response) => response.json())
            .then((data) => setMacarons(data as MacaronArray))
            .catch((error) => console.error("Erreur fetch macarons :", error));

        fetch("http://localhost:3310/api/accessories")
            .then((response) => response.json())
            .then((data) => setAccessories(data as AccessoryArray))
            .catch((error) => console.error("Erreur fetch accessoires :", error));
    }, []);

    const filteredMacarons = selectedAccessory
        ? macarons.filter(
              (macaron) =>
                  macaron.accessory?.toLowerCase() === selectedAccessory.toLowerCase()
          )
        : macarons;

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
                            <option 
                                key={accessory.id} 
                                value={accessory.slug || accessory.name}
                            >
                                {accessory.name}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <ul className="macaron-list" id="macaron-list">
                {filteredMacarons.map((macaron) => (
                    <li key={macaron.id} className="macaron-item">
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