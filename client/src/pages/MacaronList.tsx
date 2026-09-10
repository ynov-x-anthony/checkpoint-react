import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

/* ************************************************************************* */
type AccessoryArray = { id: number; name: string; slug: string }[];

function MacaronList() {
	// Step 1: get all macarons
	const [macarons, setMacarons] = useState<Macaron[]>([]);

	const [accessories, setAccessories] = useState<AccessoryArray>([]);

	const [filter, setFilter] = useState<string>("")

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
					<select onChange={(event) => setFilter(event.target.value)} id="macaron-select">
						<option value="">---</option>

						{accessories.map((acces) => (
							<option value={acces.id}>{acces.name}</option>
						))}
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">
				{macarons
					.filter((macaron) => filter === "" || macaron.accessory_id.toString() === filter)
                	.map((macaron) => (
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
