import { connectToDatabase } from "./mongoose";

const checkDatabaseConnection = async () => {
  try {
    const dbConnection = await connectToDatabase(); // Call the connectToDatabase function to establish the connection
    if (dbConnection) {
      console.log('Database connection successful');
    } else {
      console.error('Database connection failed');
    }
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

checkDatabaseConnection(); // Call the function to check the database connection