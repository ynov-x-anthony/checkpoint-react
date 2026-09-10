import Macaron from "../components/Macaron";

/* ************************************************************************* */
const sampleMacarons: MacaronArray = [
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
];

/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

import { useEffect, useState } from "react";


function MacaronList() {
	// Step 1: get all macarons

	const [macarons, setMacarons] = useState<MacaronArray>([]);

	useEffect(() => {
		async function load() {
 			const res = await fetch("http://localhost:3310/api/macarons");
 			const data = await res.json();
 		setMacarons(data);
 		}
 		load();
		return
	}, []);

	useEffect(() => {
    	console.info("Les macarons ont été chargés");
  }, [macarons]);

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
				{macarons?.map((macaron) => (
                	<li className="macaron-item" key={macaron.id}>
                    	<Macaron data={macaron} />
                	</li>
            	))}
				{/* Step 5: filter macarons before repeating */}
				<li className="macaron-item">
					<Macaron data={sampleMacarons[0]} />
				</li>
				{/* end of block */}
			</ul>
		</>
	);
}

export default MacaronList;
