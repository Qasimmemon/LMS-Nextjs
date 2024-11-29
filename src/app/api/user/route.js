import { connectDB } from "@/lib/dbconnect";
import { UserModal } from "@/lib/modals/usermodal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  console.log("obj-->",obj);
  
  //check this user exist
  

  return Response.json({
    error: false,
    msg: "User Added Successfully",
    user: newUser,
    token,
  });
}

export async function GET() {
  return Response.json("User Get Request");
}