
import express from "express";
import cors from "cors";
import connectDB from "./Db/connect.js";
import dotenv from "dotenv";
import router from "./router/bookRouter.js";

// Initialize express app
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the book router for API routes with the prefix /api/v1
app.use("/api/v1", router);

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
    console.log(`App is running at port ${process.env.PORT}`);
});
