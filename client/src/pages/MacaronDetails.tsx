import { useLoaderData } from "react-router";
import Macaron from "../components/Macaron";

function MacaronDetails() {
	const macaron = useLoaderData() as Macaron;

	return (
		<>
			<h1>{macaron.name}</h1>
			<div className="center">
				<Macaron data={macaron} />
			</div>
		</>
	);
}

export default MacaronDetails;
