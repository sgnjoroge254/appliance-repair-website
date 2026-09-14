import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export async function POST(request: Request) {
  const formData = await request.formData();
  const requiredFields = ["customerName", "phone", "email", "equipmentType", "faultDescription"];
  const missingField = requiredFields.find((field) => {
    const value = formData.get(field);
    return typeof value !== "string" || value.trim() === "";
  });

  if (missingField) {
    return NextResponse.json({ error: `Missing required field: ${missingField}` }, { status: 400 });
  }

  const assessment = Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value.name,
    ]),
  );

  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ error: "Assessment storage is not configured yet." }, { status: 503 });
  }

  const mongoClient = getMongoClient();
  await mongoClient.connect();
  await mongoClient.db("atomic_vitality").collection("assessments").insertOne({
    ...assessment,
    createdAt: new Date(),
    status: "received",
  });

  return NextResponse.json({ received: true }, { status: 201 });
}
