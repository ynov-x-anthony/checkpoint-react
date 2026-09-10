import Macaron from "../components/Macaron";
import { useEffect, useState } from "react";

/* ************************************************************************* */

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