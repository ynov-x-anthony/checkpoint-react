import { useLoaderData } from "react-router-dom";
import Macaron from "../components/Macaron";

function MacaronDetails() {
  const macaron = useLoaderData() as any;

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