import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

function MacaronList() {
	// Step 1: get all macarons
	const [macarons, setMacarons] = useState<MacaronArray>([]);

	useEffect(() => {
		fetch("http://localhost:3310/api/macarons")
			.then((response) => response.json())
			.then((data) => {
				setMacarons(data);
			})
			.catch((error) => console.error(error));
	}, []);

	// Step 3: get all accessories
	const [accessories, setAccessories] = useState<AccessoryArray>([]);

	useEffect(() => {
		fetch("http://localhost:3310/api/accessories")
			.then((response) => response.json())
			.then((data) => {
				setAccessories(data as AccessoryArray);
			})
			.catch((error) => console.error(error));
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
