import { MongoClient } from "mongodb";

const globalForMongo = globalThis as typeof globalThis & {
  mongoClient?: MongoClient;
};

export function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  const client = globalForMongo.mongoClient ?? new MongoClient(uri);
  if (process.env.NODE_ENV !== "production") {
    globalForMongo.mongoClient = client;
  }
  return client;
}
