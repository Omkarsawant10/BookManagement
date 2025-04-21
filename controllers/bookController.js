import { Book } from "../models/book.js"


export const createBook=async (req,res)=>{
    try {
        const book=new Book(req.body);
        await book.save()
        return res.status(201).json(book);
    } catch (error) {
        console.log(error);
    }
}

export const getAllBooks=async(req,res)=>{
    try {
        const books=await Book.find();

        return res.status(200).json(books);
    } catch (error) {
        console.log(error);
    }
}

export const getSingleBook=async(req,res)=>{
    try {
        const {id}=req.params;
        const book=await Book.findById(id);

        return res.status(200).json(book);
    } catch (error) {
        console.log(error);
        
    }
}

export const updateBook=async(req,res)=>{
    try {
        const {id}=req.params;
        const book=await Book.findByIdAndUpdate(id,req.body,{new:true});

        return res.status(200).json(book,{message:"Data updated Successefully"});
    } catch (error) {
        console.log(error);
    }
}

export const deleteBook=async(req,res)=>{
    try {
        const {id}=req.params;
        const book=await Book.findByIdAndDelete(id);

        return res.status(200).json({message:"Book Deleted Successfully"})
    } catch (error) {
        console.log(error);
    }
}