import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Macaron from "../components/Macaron";

function MacaronDetails() {
	const { id } = useParams();
	const [macaron, setMacaron] = useState<Macaron | null>(null);

	useEffect(() => {
		const fetchMacaron = async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/macarons/${id}`);
			const data = (await response.json()) as Macaron;
			console.info(data);
			setMacaron(data);
		};

		fetchMacaron().catch((err) => console.error(err));
	}, [id]);

	if (macaron == null) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<h1>{macaron.name}</h1>
			<Macaron data={macaron} />
		</>
	);
}

export default MacaronDetails;
