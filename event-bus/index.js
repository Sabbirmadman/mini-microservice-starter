const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
    const events = req.body;

    axios.post("http://localhost:4000/events", events).catch((err) => {
        console.log(err);
    });
    axios.post("http://localhost:4001/events", events).catch((err) => {
        console.log(err);
    });
    axios.post("http://localhost:4002/events", events).catch((err) => {
        console.log(err);
    });

    res.send({ status: "ok" });
});

app.listen(4005, () => {
    console.log("Listening on port 4005");
});
