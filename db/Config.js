const mongoose=require("mongoose");
const { config } = require("process");
mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");

