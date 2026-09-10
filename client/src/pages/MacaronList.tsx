import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Macaron from "../components/Macaron";

type AccessoryArray = { id: number; name: string; slug: string }[];

/* ************************************************************************* */
/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function MacaronList() {
    // Step 1: get all macarons
    const [macarons, setMacarons] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:3310/api/macarons")
            .then((res) => res.json())
            .then((data) => {
                console.info(data);
                setMacarons(data);
            })
            .catch((err) => console.error(err));
    }, []);

    // Step 3: get all accessories
    const [accessories, setAccessories] = useState<AccessoryArray>([]);

    useEffect(() => {
        fetch("http://localhost:3310/api/accessories")
            .then((res) => res.json())
            .then((data) => {
                const accessoriesData = data as AccessoryArray;
                console.info(accessoriesData);
                setAccessories(accessoriesData);
            })
            .catch((err) => console.error(err));
    }, []);

    // Step 5: create filter state
    const [selectedAccessory, setSelectedAccessory] = useState<string>("");

    const filteredMacarons = selectedAccessory
        ? macarons.filter((macaron) => String(macaron.accessory_id) === selectedAccessory)
        : macarons;

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
                        {accessories.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <ul className="macaron-list" id="macaron-list">
                {/* Step 2: repeat this block for each macaron */}
                {/* Step 5: filter macarons before repeating */}
                {filteredMacarons.map((macaron: any) => (
                    <li className="macaron-item" key={macaron.id}>
                        <Link to={`/macarons/${macaron.id}`}>
                            <Macaron data={macaron} />
                        </Link>
                    </li>
                ))}
                {/* end of block */}
            </ul>
        </>
    );
}

export default MacaronList;