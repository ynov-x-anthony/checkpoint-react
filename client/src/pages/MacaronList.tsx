import Macaron from "../components/Macaron";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* you can use sampleMacarons if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

type Macaron = {
    id: number;
    accessory_id: string;
    accessory: string;
    color1: string;
    color2: string;
    color3: string;
    name: string;
}

type AccessoryArray = {
  id: number;
  name: string;
  slug: string;
}[];


function MacaronList() {
    // Step 1: get all macarons
    const urlMacarons = `${import.meta.env.VITE_API_URL}/macarons`;
	// Step 3
    const [accessories, setAccessories] = useState<AccessoryArray>([]);

    console.log(urlMacarons)
    const [data, setData] = useState<Macaron[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const controller = new AbortController();
    const opts = {signal: controller.signal};

    async function fecthMacaron() {
        try {
            const res = await fetch(urlMacarons, opts);
            const data = await res.json();
            console.info(data)
            setData(data);
            setLoading(false);
            }catch (err: unknown) {
                if (err instanceof DOMException && err.name === "AbortError") {
                    return;
                }
                setError(err instanceof Error ? err.message : String(err));

            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fecthMacaron();

        return () => controller.abort();
    
    }, []);


    // Step 3: get all accessories
    useEffect(() => {
        fetch("http://localhost:3310/api/accessories")
        .then((res) => res.json())
        .then((resData) => {
            const typedData = resData as AccessoryArray;
            console.info(typedData);
            setAccessories(typedData);
        })
        .catch((err) => console.error("Erreur accessories:", err));
    }, []);

    // Step 2 - Show all the macarons + Step 5: create filter state
    const [selectedAccessory, setSelectedAccessory] = useState<string>("");

    const filtreMacarons = data?.filter((data) => {
    	if (selectedAccessory === "") return true;
    	return String(data.accessory_id) === selectedAccessory;
  	});

	// merci pour le css
	return (
		<>
		{loading && <p>Loading...</p>}
		{error && <p>Error: {error}</p>}
		<h1>My macarons</h1>

		<form className="center">
			<label htmlFor="macaron-select">
			Filter by{" "}
			<select id="macaron-select" value={selectedAccessory} onChange={(e) => setSelectedAccessory(e.target.value)}>
				<option value="">---</option>
				{accessories.map((item) => (
				<option key={item.id} value={item.id}>
					{item.name}
				</option>
				))}
			</select>
			</label>
		</form>

		<ul className="macaron-list" id="macaron-list">
			{filtreMacarons?.map((macaron) => (
			<li key={macaron.id} className="macaron-item">
				<Link to={`/macarons/${macaron.id}`}>
				<Macaron data={macaron} />
				</Link>
			</li>
			))}
		</ul>
		</>
		);
}

export default MacaronList;