import { MongoClient } from "mongodb";

// Replace the uri string with your connection string
const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("MONGO_URI environment variable is not defined");
}
export const MongoConnection = new MongoClient(uri);
export const Database = MongoConnection.db("qiita");

const initialization = async () => {
  try {
    await MongoConnection.connect();
    console.log("Connected to MongoDB");

    // Ensure the 'ogps' collection exists
    await createOGPCollection();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const createOGPCollection = async () => {
  const collections = await Database.listCollections().toArray();
  const collectionNames = collections.map((col) => col.name);
  if (!collectionNames.includes("ogps")) {
    await Database.createCollection("ogps");
    console.log("Created 'ogps' collection in the database.");
  }
};

initialization();
