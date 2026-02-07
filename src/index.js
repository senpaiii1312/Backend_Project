import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

dotenv.config({ path: "./.env" });

console.log("Database Name:", DB_NAME);

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error!", err);
  });
