import { useState, useEffect } from "react";
import Macaron from "../components/Macaron";

function MacaronList() {
    const [macaronData, setMacaronData] = useState<any[]>([]);
    const [accessories, setAccessories] = useState<any[]>([]);
    const [selectedAccessory, setSelectedAccessory] = useState<string>("");

    useEffect(() => {
        fetch("http://localhost:3310/api/macarons")
            .then((res) => res.json())
            .then((data) => setMacaronData(data))
            .catch((err) => console.error(err));

        fetch("http://localhost:3310/api/accessories")
            .then((res) => res.json())
            .then((data) => setAccessories(data))
            .catch((err) => console.error(err));
    }, []);

    const filteredMacarons = selectedAccessory
        ? macaronData.filter((macaron) =>
              macaron.accessories?.some(
                  (acc: any) => acc.id.toString() === selectedAccessory
              )
          )
        : macaronData;

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
                        {accessories.map((acc) => (
                            <option key={acc.id} value={acc.id}>
                                {acc.name}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <ul className="macaron-list" id="macaron-list">
                {filteredMacarons.map((singleMacaron) => (
                    <li className="macaron-item" key={singleMacaron.id}>
                        <Macaron data={singleMacaron} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MacaronList;