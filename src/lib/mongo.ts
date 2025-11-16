import { MongoClient } from "mongodb";

// Replace the uri string with your connection string
const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("MONGO_URI environment variable is not defined");
}
export const MongoConnection = new MongoClient(uri);
