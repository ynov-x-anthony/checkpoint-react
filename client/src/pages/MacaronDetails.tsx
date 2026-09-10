import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Macaron from "../components/Macaron";

function MacaronDetails() {
  const { id } = useParams();

  const [macaron, setMacaron] = useState<Macaron | null>(null);

  useEffect(() => {
    const fetchMacaron = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/macarons/${id}`);
      const data = (await response.json()) as Macaron;

      setMacaron(data);
    };

    fetchMacaron();
  }, [id]);

  if (macaron == null) {
    return <p className="center">Loading...</p>;
  }

  return (
    <>
      <h1>{macaron.name}</h1>
      <Macaron data={macaron} />
      <p className="center">
        <Link to="/macarons">⬅️ Back to the list</Link>
      </p>
    </>
  );
}

export default MacaronDetails;
