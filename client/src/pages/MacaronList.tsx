import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

type Accessory = {
	id: number;
	name: string;
	slug: string;
};

function MacaronList() {
	const [macarons, setMacarons] = useState<MacaronArray>([]);
	const [accessories, setAccessories] = useState<Accessory[]>([]);
	const [selectedAccessory, setSelectedAccessory] = useState("---");

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)
			.then((response) => response.json())
			.then((data: MacaronArray) => setMacarons(data))
			.catch((error) => console.error(error));
	}, []);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
			.then((response) => response.json())
			.then((data: Accessory[]) => setAccessories(data))
			.catch((error) => console.error(error));
	}, []);

	const filteredMacarons =
		selectedAccessory === "---"
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
						<option value="---">---</option>
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
						<Macaron data={macaron} />
					</li>
				))}
			</ul>
		</>
	);
}

export default MacaronList;
