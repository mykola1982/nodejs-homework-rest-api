const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Mykola:8TJ4NCVdHEf7rScz@cluster0.zbqgdms.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
