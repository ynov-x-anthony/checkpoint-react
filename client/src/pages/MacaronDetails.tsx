import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Macaron from "../components/Macaron";

type MacaronType = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

export default function MacaronDetails() {
  const { id } = useParams<{ id: string }>();
  const [macaron, setMacaron] = useState<MacaronType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/macarons/${id}`)
      .then((res) => res.json())
      .then((data) => setMacaron(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!macaron) {
    return <p>Loading macaron...</p>;
  }

  return (
    <main className="center">
      <Link to="/macarons">← Back to list</Link>
      <h1>{macaron.name}</h1>
      <Macaron data={macaron} />
    </main>
  );
}