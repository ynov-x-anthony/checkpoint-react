import { useEffect, useState } from "react";

import Macaron from "../components/Macaron";

/* ************************************************************************* */

type AccessoryArray = { id: number; name: string; slug: string }[];

function MacaronList() {
	const [macarons, setMacarons] = useState<MacaronArray>([]);
	const [accessories, setAccessories] = useState<AccessoryArray>([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)


		
			.then((response) => response.json())
			.then((data: MacaronArray) => {
				console.info(data);
				setMacarons(data);
			});
	}, []);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
			.then((response) => response.json())
			.then((data) => {
				const accessoryData = data as AccessoryArray;
				console.info(accessoryData);
				setAccessories(accessoryData);
			});
	}, []);

	return (
		<>
			<h1>My macarons</h1>
			<form className="center">
				<label htmlFor="macaron-select">
					Filter by{" "}
					<select id="macaron-select">
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
				{/* Step 2: repeat this block for each macaron */}
				{macarons.map((macaron) => (
					<li className="macaron-item" key={macaron.id}>
						<Macaron data={macaron} />
					</li>
				))}
				{/* end of block */}
			</ul>
		</>
	);
}

export default MacaronList;
