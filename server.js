const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Mykola:8TJ4NCVdHEf7rScz@cluster0.zbqgdms.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

const app = require("./app");

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success ");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
