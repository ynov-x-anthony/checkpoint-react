import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

/* ************************************************************************* */

/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function MacaronList() {
	const [macarons, setMacarons] = useState<MacaronArray>([]);
	const [accessories, setAccessories] = useState<AccessoryArray>([]);
	// Step 1: get all macarons
	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)
			.then((res) => res.json())
			.then((data) => setMacarons(data));
		// Step 3: get all accessories
		fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
			.then((res) => res.json())
			.then((data) => setAccessories(data));
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
						{/* Step 4: add an option for each accessory */}
						{accessories.map((accessory) => (
							<option key={accessory.id} value={accessory.slug}>
								{accessory.name}
							</option>
						))}
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">
				{/* Step 2: repeat this block for each macaron */}
				{macarons.map((macaron) => {
					return (
						<li key={macaron.id} className="macaron-item">
							<Macaron data={macaron} />
						</li>
					);
				})}
				{/* Step 5: filter macarons before repeating */}

				{/* end of block */}
			</ul>
		</>
	);
}

export default MacaronList;
