import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

type AccessoryArray = { id: number; name: string; slug: string }[];

function MacaronList() {
	// Step 1: get all macarons
	const [macarons, setMacarons] = useState<MacaronArray>([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)
			.then((response) => response.json())
			.then((data: MacaronArray) => {
				setMacarons(data);
			});
	}, []);

	// Step 3: get all accessories
	const [accessories, setAccessories] = useState<AccessoryArray>([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
			.then((response) => response.json())
			.then((data: AccessoryArray) => {
				setAccessories(data);
			});
	}, []);

	// Step 5: create filter state
	const [selectedAccessory, setSelectedAccessory] = useState("");

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
							<option value={accessory.id} key={accessory.id}>
								{accessory.name}
							</option>
						))}
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">
				{macarons
					.filter(
						(macaron) =>
							selectedAccessory === "" ||
							macaron.accessory_id === selectedAccessory,
					)
					.map((macaron) => (
						<li className="macaron-item" key={macaron.id}>
							<Macaron data={macaron} />
						</li>
					))}
			</ul>
		</>
	);
}

export default MacaronList;
