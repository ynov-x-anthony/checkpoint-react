import Macaron from "../components/Macaron";

/* ************************************************************************* */
const sampleMacarons: MacaronArray = [
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

/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

import { useEffect, useState } from "react";
type AccessoryArray = { id: number; name: string; slug: string }[];

function MacaronList() {
	// Step 1: get all macarons

	const [macarons, setMacarons] = useState<MacaronArray>([]);

	useEffect(() => {
		async function load() {
 			const res = await fetch(`${import.meta.env.VITE_API_URL}/api/macarons`);
 			const data = await res.json();
			console.log(data)
 		setMacarons(data);
 		}
 		load();
		return
	}, []);

	// Step 3: get all accessories

	const [accessories, setAccessories] = useState<AccessoryArray>([]);

	useEffect(() => {
		async function load() {
 			const res = await fetch(`${import.meta.env.VITE_API_URL}/api/accessories`);
 			const data = await res.json();
			console.log(data)
 		setAccessories(data);
 		}
 		load();
		return
	}, []);

	// Step 5: create filter state

	const [selectedAccessory, setSelectedAccessory] = useState("");

	// Step 5: filter macarons before repeating

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
						onChange={(e) => setSelectedAccessory(e.target.value)}
					>
						<option value="">---</option>
						{accessories?.map((accessory) => (
							<option key={accessory.id} value={accessory.id}>
								{accessory.name}
							</option>
						))}
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">
				{filteredMacarons?.map((macaron) => (
                	<li className="macaron-item" key={macaron.id}>
                    	<Macaron data={macaron} />
                	</li>
            	))}
				<li className="macaron-item">
					<Macaron data={sampleMacarons[0]} />
				</li>
			</ul>
		</>
	);
}

export default MacaronList;