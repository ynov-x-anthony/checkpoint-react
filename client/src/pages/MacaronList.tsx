import { useEffect, useState } from "react";

// Step 2 : import à utiliser lors de l'affichage des macarons
// import Macaron from "../components/Macaron";

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
        console.error("Erreur lors de la récupération :", error);
      });
  }, []);

  // Step 3: get all accessories

  // Step 5: create filter state

  return (
    <>
      <h1>My macarons</h1>

      <p className="center">
        {macarons.length} macarons récupérés.
      </p>

      <form className="center">
        <label htmlFor="macaron-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="macaron-select">
            <option value="">---</option>

            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>

      <ul className="macaron-list" id="macaron-list">
        {/* Step 2: repeat this block for each macaron */}

        {/* Step 5: filter macarons before repeating */}
      </ul>
    </>
  );
}

export default MacaronList;