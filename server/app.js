const http = require('http');
const express = require('express');
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contacts")

const app = express();

const port = 2008;

const server = http.createServer(app);
app.use(express.json());


mongoose
    .connect("mongodb+srv://Jared:KgFgu6Uh5T5C*wp@cluster0.wc2vosj.mongodb.net/test?retryWrites=true&w=majority")
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/api/info", contactRoutes)


server.listen(port, () => {
    console.log(`listening on port ${port}`);
});