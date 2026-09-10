import Macaron from "../components/Macaron";
import { useEffect, useState } from "react";

type MacaronData = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

type AccessoryArray = { id: number; name: string; slug: string }[];

const ACCESSORY_URL = `${import.meta.env.VITE_API_URL}/api/accessories`;

const MACARON_URL = `${import.meta.env.VITE_API_URL}/api/macarons`;
/* ************************************************************************* */
/*
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
*/
/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function MacaronList() {
	// Step 1: get all macarons
	const [data, setData] = useState<MacaronData[]>([]);

	useEffect(() => {
    async function fetchMacarons() {
      const response = await fetch(MACARON_URL);
      const result: MacaronData[] = await response.json();
      setData(result);
      console.info(result);
    }

    fetchMacarons();
  	}, []);
	// Step 3: get all accessories
  	const [accessories, setAccessories] = useState<AccessoryArray>([]);

	useEffect(() => {
		async function fetchAccessories() {
		const response = await fetch(ACCESSORY_URL);
		const result = (await response.json()) as AccessoryArray;
		setAccessories(result);
		console.info(result);
		}

		fetchAccessories();
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
							<option key={accessory.id} value={accessory.id}>
							{accessory.name}
							</option>
						))}
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">
				{/* Step 2: repeat this block for each macaron */}
					{data.map((macaron) => (
    					<li className="macaron-item" key={macaron.id}>
     						<Macaron data={macaron} />
    					</li>
  					))}
				{/* Step 5: filter macarons before repeating */}
				{/* end of block */}
			</ul>
		</>
	);
}

export default MacaronList;
