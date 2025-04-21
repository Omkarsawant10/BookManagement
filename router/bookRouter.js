import express from "express";
import { createBook, deleteBook, getAllBooks, getSingleBook, updateBook } from "../controllers/bookController.js";

const router=express.Router();

router.route("/books").post(createBook);
router.route("/books").get(getAllBooks);
router.route("/books/:id").get(getSingleBook);
router.route("/books/:id").put(updateBook);
router.route("/books/:id").delete(deleteBook);

export default router;