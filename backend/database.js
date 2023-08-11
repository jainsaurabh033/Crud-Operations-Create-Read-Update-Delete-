const mongoose = require("mongoose");

async function DbConnect() {
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect("mongodb://127.0.0.1:27017/Crud");
  // const db = await mongoose.connect(ENV.ATLAS_URI);
  console.log("Database Connected");
  return db;
}

module.exports = DbConnect;
