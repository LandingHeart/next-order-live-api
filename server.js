const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./configs/.env") });
const index = require("./routes/index");
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/", index);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// db.sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Synced and connected db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// connectPostgres();

// async function connectPostgres() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }
