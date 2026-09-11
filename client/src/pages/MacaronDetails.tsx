import { Link, useLoaderData } from "react-router-dom";
import Macaron from "../components/Macaron";

function MacaronDetails() {
	const macaron = useLoaderData() as Macaron;

	return (
		<>
			<Link to="/macarons">Back to macarons</Link>
			<h1>Macaron details</h1>
			<h2>{macaron.name}</h2>
			<Macaron data={macaron} />
		</>
	);
}

export default MacaronDetails;
