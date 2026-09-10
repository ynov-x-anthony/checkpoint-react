import { Link, useLoaderData } from "react-router";
import Macaron from "../components/Macaron";

function MacaronDetails() {
  const macaron = useLoaderData() as Macaron;

  return (
    <>
      <h1>{macaron.name}</h1>

      <Macaron data={macaron} />

      <Link to="/macarons">Retour aux macarons</Link>
    </>
  );
}

export default MacaronDetails;