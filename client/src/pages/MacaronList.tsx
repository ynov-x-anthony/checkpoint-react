import { useEffect, useState } from "react";

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
