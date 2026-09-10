import Macaron from "../components/Macaron";
import { useEffect, useState } from "react";

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

function MacaronList() {
	// Step 1: get all macarons
	const [macarons, setMacarons] = useState<MacaronArray>([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)
			.then((response) => response.json())
			.then((data) => {
				console.info("Macarons:", data);
				setMacarons(data);
			})
			.catch((error) => console.error("Error:", error));
	}, []);

	// Step 3: get all accessories
	type AccessoryArray = {
		id: number;
		name: string;
	}[];

	const [accessories, setAccessories] = useState<AccessoryArray>([]);
	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
			.then((response) => response.json())
			.then((data) => {
				console.info("Accessories:", data);
				setAccessories(data);
			})
			.catch((error) => console.error("Error:", error));
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
						{
							accessories.map((accessory) => (
								<option key={accessory.id} value={accessory.id}>
									{accessory.name}
								</option>
							))
						}
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">
				{
					macarons.map((macaron) => (
						<li key={macaron.id}>
							<Macaron data={macaron} />
						</li>
					))
				}
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
