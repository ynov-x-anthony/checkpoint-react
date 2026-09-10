import Macaron from "../components/Macaron";
import { useEffect, useState } from "react";

/* ************************************************************************* */
// Ajout du type défini dans ton Indice 2
type AccessoryArray = { id: number; name: string; slug: string }[];
/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function MacaronList() {
    // Step 1: get all macaronsS
    const [macarons, setMacarons] = useState<MacaronArray>([]);

    useEffect(() => {
        async function load() {
            const res = await fetch("http://localhost:3310/api/macarons");
            const data = await res.json();
            setMacarons(data);
            console.info(data);
        }
        load();
    }, []);
    

    // Step 3: get all accessories
    const [accessories, setAccessories] = useState<AccessoryArray>([]);

    useEffect(() => {
        async function loadAccessories() {
            const res = await fetch("http://localhost:3310/api/accessories");
            const data = (await res.json()) as AccessoryArray;
            setAccessories(data);
            console.info("Accessoires de l'API :", data);
        }
        loadAccessories();
    }, []);

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
                {macarons.map((macaron) => (
                    <li className="macaron-item" key={macaron.id}>
                        <Macaron data={macaron} />
                    </li>
                ))}
                {/* end of block */}
            </ul>
        </>
    );
}

export default MacaronList;