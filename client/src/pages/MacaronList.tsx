import { useState, useEffect } from "react";
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

function MacaronList() {

	const [macarons, setMacarons] = useState([])

	useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/macarons ")
        .then((response) => response.json())
        .then((data) => setMacarons(data));
    }, []);

	console.log(macarons)
	
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
				{macarons.map((macaron : Macaron) => (<Macaron data = {macaron} key={macaron.id}></Macaron>))}
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
