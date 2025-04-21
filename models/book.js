import mongoose, { Mongoose } from "mongoose";


const bookSchema=new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        publishedYear: { type: Number, required: true },
        genre: { type: String, enum: ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"] }
    }
      
)

export const Book=mongoose.model("Book",bookSchema);