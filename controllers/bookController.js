import { Book } from "../models/book.js";

// Create a new book
export const createBook = async (req, res) => {
    try {
        const book = new Book(req.body); // Create a new book instance with request body
        await book.save(); // Save to database
        return res.status(201).json(book); // Respond with created book
    } catch (error) {
        console.log(error); // Log any errors
    }
};

// Get all books from the database
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find(); // Find all books
        return res.status(200).json(books); // Respond with book list
    } catch (error) {
        console.log(error); // Log any errors
    }
};

// Get a single book by ID
export const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params; // Extract book ID from request parameters
        const book = await Book.findById(id); // Find book by ID
        if (!book) return res.status(404).json({ message: 'Book not present' }); //error message if book not present
        return res.status(200).json(book); // Respond with the found book
    } catch (error) {
        console.log(error); // Log any errors
    }
};

// Update a book by ID
export const updateBook = async (req, res) => {
    try {
        const { id } = req.params; // Extract book ID from request parameters
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true }); // Update book and return the updated document
        if (!updatedBook) return res.status(404).json({ message: 'Book not present' }); //error message if book not present
        return res.status(200).json(updatedBook); // Respond with the updated book
    } catch (error) {
        console.log(error); // Log any errors
    }
};

// Delete a book by ID
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params; // Extract book ID from request parameters
        const deletedBook = await Book.findByIdAndDelete(id); // Delete book by ID
        if (!deleteBook) return res.status(404).json({ message: 'Book not present' }); //error message if book not present
        return res.status(200).json({ message: "Book Deleted Successfully" }); // Respond with success message
    } catch (error) {
        console.log(error); // Log any errors
    }
};
