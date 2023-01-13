const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller');
const { text } = require("./controller");
const { updateColor } = require("./controller")
const { deleteText } = require("./controller")

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/text", text)
app.put("/api/updateColor", updateColor)
app.delete("/api/deleteText", deleteText)

app.listen(4000, () => console.log("Server running on 4000"));
