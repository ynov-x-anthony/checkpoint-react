import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

function MacaronList() {

	const URL = "http://localhost:3310/api/macarons"
	const accessoriesURL = "http://localhost:3310/api/accessories"

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

	const [accData, setAccData] = useState<Accessory[]>([])

	useEffect(() => {
		async function load() {
			const response = await fetch(accessoriesURL)
			const result: Accessory[] = await response.json()
			setAccData(result)
		}

		load()
	}, [])

	const [filter, setFilter] = useState<string>("")
	return (
		<>
			<h1>My macarons</h1>
			{loading && <p>Macarons are loading...</p>}
			{error && <p>Error : {error}</p>}
			<form className="center">
				<label htmlFor="macaron-select">
					Filter by{filter}
					<select onChange={(event) => setFilter(event.target.value)} id="macaron-select">
						{accData.map((accessory) => (
							<option key={accessory.id} value={accessory.slug}>{accessory.name}</option>
						))}
					</select>
				</label>
			</form>
			<ul className="macaron-list" id="macaron-list">
				{data.map((macaron: Macaron) => (
					filter === "" ? (
						<li key={macaron.id} className="macaron-item">
							<Macaron data={macaron} />
						</li> 
					) : (
						macaron.accessory === filter && (
							<li key={macaron.id} className="macaron-item">
								<Macaron data={macaron} />
							</li> 
						)
					)
				))}
			</ul>
		</>
	);
}

export default MacaronList;
