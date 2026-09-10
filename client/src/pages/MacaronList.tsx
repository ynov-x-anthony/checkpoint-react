import { useEffect, useState } from "react";
import { Link } from "react-router";
import Macaron from "../components/Macaron";

type AccessoryArray = {
  id: number;
  name: string;
  slug: string;
}[];

function MacaronList() {
  // Step 1: get all macarons
  const [macarons, setMacarons] = useState<MacaronArray>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        return response.json();
      })
      .then((data: MacaronArray) => {
        setMacarons(data);
        console.info("Macarons récupérés :", data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des macarons :", error);
      });
  }, []);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        return response.json();
      })
      .then((data: AccessoryArray) => {
        setAccessories(data);
        console.info("Accessoires récupérés :", data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des accessoires :",
          error,
        );
      });
  }, []);

  // Step 5: create filter state
  const [selectedAccessory, setSelectedAccessory] = useState("");

  return (
    <>
      <h1>My macarons</h1>

      <p className="center">
        {macarons.length} macarons récupérés.
      </p>

      <p className="center">
        {accessories.length} accessoires récupérés.
      </p>

      <form className="center">
        <label htmlFor="macaron-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="macaron-select"
            value={selectedAccessory}
            onChange={(event) => setSelectedAccessory(event.target.value)}
          >
            <option value="">---</option>

            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="macaron-list" id="macaron-list">
        {/* Step 5: filter macarons before repeating */}
        {macarons
          .filter(
            (macaron) =>
              selectedAccessory === "" ||
              macaron.accessory_id === selectedAccessory,
          )
          .map((macaron) => (
			<li className="macaron-item" key={macaron.id}>
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