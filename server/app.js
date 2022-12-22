const http = require('http');
const express = require('express');
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contacts");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = 2008;

const server = http.createServer(app);
app.use(express.json());


mongoose
    .connect(process.env.MONGOOSE_CONNECTION)
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/api/info", contactRoutes)


server.listen(port, () => {
    console.log(`listening on port ${port}`);
});