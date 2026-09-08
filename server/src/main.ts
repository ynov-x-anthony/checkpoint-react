// Load environment variables from .env file
import "dotenv/config";

// Import the Express application from ./app
import app from "./app";

app.get("/api", (req, res) => {
  res.send("The API is available 🍬");
});

import data from "./db.json";

app.get("/api/macarons", (req, res) => {
  res.json(data.macarons);
});

app.get("/api/macarons/:id", (req, res) => {
  const idAsInt = Number.parseInt(req.params.id);

  const wantedMacaron = data.macarons.find((macaron) => macaron.id === idAsInt);

  if (wantedMacaron == null) {
    res.sendStatus(404);
  } else {
    res.json(wantedMacaron);
  }
});

app.get("/api/accessories", (req, res) => {
  res.json(data.accessories);
});

app.get("/api/accessories/:id", (req, res) => {
  const idAsInt = Number.parseInt(req.params.id);

  const wantedAccessory = data.accessories.find(
    (accessory) => accessory.id === idAsInt,
  );

  if (wantedAccessory == null) {
    res.sendStatus(404);
  } else {
    res.json(wantedAccessory);
  }
});

// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error("Error:", err.message);
  });
