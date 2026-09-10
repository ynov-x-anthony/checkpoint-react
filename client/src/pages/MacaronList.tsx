import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

// type Macaron = {
// 	id: number;
// 	accessory_id: string;
// 	accessory?: string;
// 	color1: string;
// 	color2: string;
// 	color3: string;
// 	name: string;
// }

/* ************************************************************************* */
// const sampleMacarons: MacaronArray = [
// 	{
// 		id: 10,
// 		accessory_id: "4",
// 		accessory: "agorski",
// 		color1: "blue",
// 		color2: "white",
// 		color3: "red",
// 		name: "France",
// 	},
// 	{
// 		id: 11,
// 		accessory_id: "4",
// 		accessory: "agorski",
// 		color1: "yellow",
// 		color2: "red",
// 		color3: "black",
// 		name: "Germany",
// 	},
// 	{
// 		id: 27,
// 		accessory_id: "5",
// 		accessory: "christmas-candy",
// 		color1: "yellow",
// 		color2: "blue",
// 		color3: "blue",
// 		name: "Sweden",
// 	},
// ];

/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */
type AccessoryArray = { id: number; name: string; slug: string }[];

function MacaronList() {
	// Step 1: get all macarons
	const [macarons, setMacarons] = useState<Macaron[]>([]);

	const [accessories, setAccessories] = useState<AccessoryArray>([]);

    useEffect(() => {
        fetch("http://localhost:3310/api/macarons")
            .then((response) => response.json())
            .then((data) => {
                console.info("Mes macarons :", data);
                setMacarons(data);
            })
            .catch((err) => console.error(err));
    }, []);

	useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
        .then((response) => response.json())
        .then((data) => {
                console.info("Accessoires :", data);
                setAccessories(data);
            })
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
						<option value=" ">---</option>

						{accessories.map((acces) => (
							<option value={acces.id}>{acces.name}</option>
						))}
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">
                {/* Step 2: repeat this block for each macaron */}
                {macarons.map((macaron) => (
					<li key={macaron.id} className="macaron-item">
						<Macaron data={macaron}  />
					</li>
				))}
			 {/* Step 5: filter macarons before repeating */}
				
				{/* end of block */}
			</ul>
		</>
	);
}

export default MacaronList;
