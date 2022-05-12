import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

//Import router code
import CompetitionRouter from "./api/competition.router.js";


dotenv.config();

const app = express(); //Start express app
const port = process.env.PORT || 8000;

console.log("---------------------------")
console.log("Server.js: Connecting to mongodb...")

//Set up plugins to middle ware
app.use(cors()); //Set express app to use cors (For middleware plugins)
app.use(express.json()); //Set express to use json middleware stuff

//Start connection to mongodb atlas
mongoose.connect(process.env.ATLAS_URI, { useNewURLParser: true});
const connection = mongoose.connection;
connection.once("open", () => { console.log("Server.js: Mongodb connection established")});


//Routing
app.use("/api/competition", CompetitionRouter)
app.use("*", (req,res) => res.status(404).json({error: "not found"}))

app.listen(port, () => {console.log(`Server.js: Server listening on port ${port}`)})