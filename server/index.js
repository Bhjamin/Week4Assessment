const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createItem, getAllItems, getItemById } = require('./controller')



app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/createItem", createItem)
app.get("/api/getAllItems/", getAllItems)
app.get("/api/getItemById", getItemById)

app.listen(4000, () => console.log("Server running on 4000"));
