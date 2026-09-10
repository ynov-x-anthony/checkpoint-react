import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

type AccessoryArray = { id: number; name: string; slug: string }[];

/* ************************************************************************* */

/* ************************************************************************* */

function MacaronList() {
  // Step 1: get all macarons
  const [macarons, setMacarons] = useState<MacaronArray>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)
      .then((response) => response.json())
      .then((data) => setMacarons(data));
  }, []);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
      .then((response) => response.json())
      .then((data) => setAccessories(data as AccessoryArray));
  }, []);

  // Step 5: create filter state

  return (
    <>
      <h1>My macarons</h1>

      <form className="center">
        <label htmlFor="macaron-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="macaron-select">
            <option value="">---</option>

            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option value={accessory.id} key={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="macaron-list" id="macaron-list">
        {/* Step 2: repeat this block for each macaron */}
        {/* Step 5: filter macarons before repeating */}
        {macarons.map((macaron) => (
          <li className="macaron-item" key={macaron.id}>
            <Macaron data={macaron} />
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default MacaronList;