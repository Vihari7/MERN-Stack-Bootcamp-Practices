const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const PORT = process.env.PORT || 8080;
const MONGOURL = process.env.MONGOURL;
app.use(express.json());

app.listen(8080, () => console.log("Server is runniing in port 8080"));
