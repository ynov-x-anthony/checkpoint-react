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
	const [selectedAccessory, setSelectedAccessory] = useState<string>("");
    const filteredMacarons = selectedAccessory
        ? macarons.filter((macaron) => macaron.accessory_id === selectedAccessory)
        : macarons;
	return (
		<>
			<h1>My macarons</h1>
			<form className="center">
				<label htmlFor="macaron-select">
					{/* Step 5: use a controlled component for select */}
					FFilter by{" "}
                    <select 
                        id="macaron-select"
                        value={selectedAccessory}
                        onChange={(e) => setSelectedAccessory(e.target.value)}
                    >
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
				{/* Step 5: filter macarons before repeating */}
				{filteredMacarons.map((macaron) => (
    				<li key={macaron.id} className="macaron-item">
        				<Macaron data={macaron} />
    				</li>
				))}
				{/* end of block */}
			</ul>
		</>
	);
}

export default MacaronList;
