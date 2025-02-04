const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ranjan222555:ranjan222555@cluster0.l63e3.mongodb.net/"
  )
  .then(() => {
    console.log("MogoDB Database connect sucessfully ");
  })
  .catch((error) => console.log(`Error catch: ${error}`));
