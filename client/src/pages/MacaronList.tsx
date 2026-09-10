import { useEffect, useState } from "react";

import Macaron from "../components/Macaron";

/* ************************************************************************* */

function MacaronList() {
	const [macarons, setMacarons] = useState<MacaronArray>([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)


		
			.then((response) => response.json())
			.then((data: MacaronArray) => {
				console.info(data);
				setMacarons(data);
			});
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
				{/* Step 2: repeat this block for each macaron */}
				{/* Step 5: filter macarons before repeating */}
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
