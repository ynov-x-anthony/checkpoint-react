import Macaron from "../components/Macaron";
import { useEffect, useState } from "react";

/* const sampleMacarons: MacaronArray = [
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
]; */

/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */
function MacaronList() {
	// Step 1: get all macarons
	const [macarons, setMacarons] = useState<MacaronArray>([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)
			.then((res) => res.json())
			.then((data: MacaronArray) => setMacarons(data))
			.catch((err) => console.error(err));
	}, []);

	// Step 3: get all accessories
	const [accessories, setAccessories] = useState<AccessoryArray>([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
			.then((res) => res.json())
			.then((data: AccessoryArray) => setAccessories(data))
			.catch((err) => console.error(err));
	}, []);

	console.info(accessories);

	return (
		<>
			<h1>My macarons</h1>
			<form className="center">
				<label htmlFor="macaron-select">
					Filter by{" "}
					<select id="macaron-select">
						<option value="">---</option>
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">
				{macarons.map((macaron) => (
					<li className="macaron-item" key={macaron.id}>
						<Macaron data={macaron} />
					</li>
				))}
			</ul>
		</>
	);
}

export default MacaronList;

