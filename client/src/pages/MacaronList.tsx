import { useEffect, useState } from "react";
import { Link } from "react-router";

import Macaron from "../components/Macaron";

/* ************************************************************************* */

function MacaronList() {
	const [macarons, setMacarons] = useState<MacaronArray>([]);

	// Step 1: get all macarons
	useEffect(() => {
		const fetchMacarons = async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/macarons`);
			const data = (await response.json()) as MacaronArray;
			console.info(data);
			setMacarons(data);
		};

		fetchMacarons().catch((err) => console.error(err));
	}, []);

	// Step 3: get all accessories
	const [accessories, setAccessories] = useState<AccessoryArray>([]);

	useEffect(() => {
		const fetchAccessories = async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/accessories`);
			const data = (await response.json()) as AccessoryArray;
			console.info(data);
			setAccessories(data);
		};

		fetchAccessories().catch((err) => console.error(err));
	}, []);

	// Step 5: create filter state
	const [selectedAccessory, setSelectedAccessory] = useState<string>("");

	const filteredMacarons =
		selectedAccessory === ""
			? macarons
			: macarons.filter((macaron) => macaron.accessory_id === selectedAccessory);

	return (
		<>
			<h1>My macarons</h1>
			<form className="center">
				<label htmlFor="macaron-select">
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
				{filteredMacarons.map((macaron) => (
					<li className="macaron-item" key={macaron.id}>
						<Link to={`/macarons/${macaron.id}`}>
							<Macaron data={macaron} />
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default MacaronList;
