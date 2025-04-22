import express from "express";

// Import controller functions for handling book operations
import { createBook, deleteBook, getAllBooks, getSingleBook, updateBook } from "../controllers/bookController.js";

// Create a new router instance
const router = express.Router();

// Route to create a new book 
router.route("/books").post(createBook);

// Route to get all books 
router.route("/books").get(getAllBooks);

// Route to get a single book by ID 
router.route("/books/:id").get(getSingleBook);

// Route to update a book by ID 
router.route("/books/:id").put(updateBook);

// Route to delete a book by ID 
router.route("/books/:id").delete(deleteBook);

// Export the router to be used in other parts of the app
export default router;
