import { Link } from "react-router-dom";

import "./Home.css";

import Macaron from "../components/Macaron";

const sampleData = {
  id: 0,
  accessory_id: "0",
  accessory: "donut",
  color1: "var(--default-cream-color)",
  color2: "var(--default-cream-color)",
  color3: "var(--default-cream-color)",
  name: "",
};

function Home() {
  return (
    <>
      <h1>Macaron Union</h1>
      <div className="home-hero">
        <div className="home-macaron">
          <Macaron data={sampleData} />
        </div>
        <div className="home-content">
          <p>
            Welcome to the Macaron Union 🍬 <br />
            On this application, you will:
          </p>
          <p>
            ✔️ Display macarons from an API <br />
            ✔️ Filter them by accessory
          </p>
          <p>
            Clic on <Link to="/instructions">Instructions</Link> to start !
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
