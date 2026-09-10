import { useState, useEffect } from "react";
import Macaron from "../components/Macaron";


type AccessoriesType = {id:number, name:string, slug:string}[]

function MacaronList() {

	const [macarons, setMacarons] = useState([]);
	const [accessories, setAccessories] = useState<AccessoriesType>([]);

	useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/macarons ")
        .then((response) => response.json())
        .then((data) => setMacarons(data));
    }, []);

	useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/accessories ")
        .then((response) => response.json())
        .then((data) => setAccessories(data));
    }, []);

	console.log(macarons)
	console.log(accessories)

	const [filter, setFilter] = useState("");

	let filterMacarons = macarons.filter((m: Macaron) => filter === " " || String(m.accessory_id) === filter,
	);
	console.log("filterMacarons : "+ filterMacarons)
	return (
		<>
			<h1>My macarons</h1>
			<form className="center">
				<label htmlFor="macaron-select">
					Filter by{" "}

					<select
						id="macaron-select"
						value={filter}
						onChange={(event) => setFilter(event.target.value)}
					>
						<option value=" ">---</option>

						{accessories.map((option) => (
					
							<option value={option.id}>{option.name}</option>
						))}
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">

				{filterMacarons.map((macaron : Macaron) => (
					
					<li className="macaron-item">
						<Macaron data = {macaron} key={macaron.id}></Macaron>
					</li>))}

				{/* end of block */}
			</ul>
		</>
	);
}

export default MacaronList;
