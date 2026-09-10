import { useState, useEffect } from "react";
import Macaron from "../components/Macaron";
type AccessoryArray = { id: number; name: string; slug: string }[];
// Typage pour l'étape 1
type MacaronType = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

/* ************************************************************************* */
const sampleMacarons = [
    {
        id: 10,
        accessory_id: "4",
        accessory: "agorski",
        color1: "blue",
        color2: "white",
        color3: "red",
        name: "France",
    },
    {
        id: 11,
        accessory_id: "4",
        accessory: "agorski",
        color1: "yellow",
        color2: "red",
        color3: "black",
        name: "Germany",
    },
    {
        id: 27,
        accessory_id: "5",
        accessory: "christmas-candy",
        color1: "yellow",
        color2: "blue",
        color3: "blue",
        name: "Sweden",
    },
];
/* ************************************************************************* */

function MacaronList() {
    // Step 1: get all macarons
    // Utilisation de useState pour stocker les macarons
    const [macarons, setMacarons] = useState<MacaronType[]>([]);

    // Utilisation de useEffect pour déclencher fetch au montage
    useEffect(() => {
        const fetchMacarons = async () => {
            const response = await fetch("http://localhost:3310/api/macarons");
            const data = await response.json();
            
            setMacarons(data);
			//vérifier la data
            console.info(data); 
        };

        fetchMacarons();
    }, []);
	// Step 3: get all accessories
    const [accessories, setAccessories] = useState<AccessoryArray>([]);

    //fetch dédié aux accessoires
    useEffect(() => {
        const fetchAccessories = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/accessories`);
            const data = await response.json();
            
            setAccessories(data as AccessoryArray);
        };

        fetchAccessories();
    }, []);
    console.info("Vérification Étape 3 :", accessories);
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
				{macarons.map((macaron) => (
                    <li key={macaron.id} className="macaron-item">
                        <Macaron data={macaron} />
                    </li>
                ))}
				{/* Step 5: filter macarons before repeating */}
				<li className="macaron-item">
					<Macaron data={sampleMacarons[0]} />
				</li>
				{/* end of block */}
			</ul>
		</>
	);
}

export default MacaronList;
