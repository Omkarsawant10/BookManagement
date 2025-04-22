import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Function to connect to MongoDB
const connectDB = (async () => {
  try {
    // Check if the MONGO_URI variable is defined
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    console.log('Attempting to connect to MongoDB...');

    // Attempt to connect to MongoDB using Mongoose
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Log success message with the connected host
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log error message and exit the process with failure
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
})();

// Export the connectDB function (which runs immediately)
export default connectDB;
