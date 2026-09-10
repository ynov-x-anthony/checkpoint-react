import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

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

function MacaronList() {

	// type Macaron = {
	// 	id: number,
	// 	accessory_id: number
	// 	color1: string,
	// 	color2: string,
	// 	color3: string,
	// 	name: string

	// }
	const URL = "http://localhost:3310/api/macarons"
	// Step 1: get all macarons
	const [data, setData] = useState<Macaron[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const controller = new AbortController()

		async function getMacarons() {
			try {
				const response = await fetch(URL, { signal: controller.signal })

				if (!response.ok) {
					throw new Error(`Error, status : ${response.status}`)
				}

				const result: Macaron[] = await response.json()
				setData(result)
			} catch (err) {
				if (err instanceof DOMException && err.name === "AbortError") {
					return
				}

				setError(
					err instanceof Error ? err.message :"Unable to get macarons data"
				)
			} finally {
				if (!controller.signal.aborted) {
					setLoading(false)
				}
			}
		}

		getMacarons()

		return () => controller.abort()
	}, [])

	// Step 3: get all accessories

	// Step 5: create filter state

	return (
		<>
			<h1>My macarons</h1>
			{loading && <p>Macarons are loading...</p>}
			{error && <p>Error : {error}</p>}
			{/* {data && <p>data fetched (test)</p>} */}
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
				{data.map((macaron: Macaron) => (
					<li key={macaron.id} className="macaron-item">
						<Macaron data={macaron} />
					</li>
				))}
				
				{/* end of block */}
			</ul>
		</>
	);
}

export default MacaronList;
