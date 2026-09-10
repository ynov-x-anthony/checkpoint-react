import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

/* ************************************************************************* */

/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

type AccessoryArray = {
	id: number;
	name: string;
	slug: string;
}[];

function MacaronList() {
	// Step 1: get all macarons
	const [macarons, setMacarons] = useState<MacaronArray>([]);

	useEffect(() => {
		fetch("http://localhost:3310/api/macarons")
			.then((response) => response.json())
			.then((data: MacaronArray) => setMacarons(data))
			.catch((error) => console.error("Erreur de chargement :", error));
	}, []);

	console.info(macarons);

	// Step 3: get all accessories
	const [accessories, setAccessories] = useState<AccessoryArray>([]);

    useEffect(() => {
        fetch("http://localhost:3310/api/accessories")
			.then((response) => response.json())
			.then((data: AccessoryArray) => setAccessories(data))
			.catch((error) => console.error("Erreur de chargement :", error));
	}, []);
	console.info(accessories);


	// Step 5: create filter state
	const [selectedAccessory, setSelectedAccessory] = useState("");
	const filteredMacarons = selectedAccessory
		? macarons.filter((macaron) => macaron.accessory_id === selectedAccessory)
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
						onChange={(event) => setSelectedAccessory(event.target.value)}
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
				{/* Step 2: repeat this block for each macaron */}
				{/* Step 5: filter macarons before repeating */}
				{filteredMacarons.map((macaron) => (
                    <Macaron
                    key={macaron.id}
                    data={macaron}
                    />
				))}
			</ul>
		</>
	);
}

export default MacaronList;
