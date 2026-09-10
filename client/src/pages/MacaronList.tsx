import { useEffect, useState } from "react";
import Macaron from "../components/Macaron";

function MacaronList() {
  // Step 1: get all macarons
  const [macarons, setMacarons] = useState<MacaronArray>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/macarons`)
      .then((res) => res.json())
      .then((data: MacaronArray) => {
        setMacarons(data);
      });
  }, []);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<AccessoryArray>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/accessories`)
      .then((res) => res.json())
      .then((data: AccessoryArray) => {
        setAccessories(data);
      });
  }, []);

  // Step 5: create filter state
  const [selectedAccessory, setSelectedAccessory] = useState("");

  const filteredMacarons = macarons.filter((macaron) => {
    if (selectedAccessory === "") {
      return true;
    }
    return String(macaron.accessory_id) === String(selectedAccessory);
  });

  return (
    <>
      <h1>My macarons</h1>
      <form className="center">
        <label htmlFor="macaron-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="macaron-select"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="macaron-list" id="macaron-list">
        {/* Step 2: repeat this block for each macaron */}
        {/* Step 5: filter macarons before repeating */}
        {filteredMacarons.map((macaron) => (
          <li key={macaron.id} className="macaron-item">
            <Macaron data={macaron} />
          </li>
        ))}
        {/* end of block */}
      </ul>
    </>
  );
}

export default MacaronList;