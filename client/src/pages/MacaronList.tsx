import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Macaron from "../components/Macaron";

function MacaronList() {
	// Step 1: get all macarons
	const [macarons, setMacarons] = useState<MacaronArray>([]);

	useEffect(() => {
		const fetchMacarons = async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/macarons`);
			const data = (await response.json()) as MacaronArray;

			console.info(data);

			setMacarons(data);
		};

		fetchMacarons();
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

		fetchAccessories();
	}, []);

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
				{filteredMacarons.map((macaron) => (
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
