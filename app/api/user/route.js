// import { users } from "@/app/helpers/constants"
import user from "@/models/User"
import { connect } from "mongoose"
import  { NextResponse } from "next/server"

export async function GET(){
    await connect(process.env.MONGODB_URL)
    const users = await user.find()
    return NextResponse.json({ message:"The users !", users },{status:201})
}

export async function POST(request){
    const {name,email,password} = await request.json()
    await user.create({name,email,password})
    return NextResponse.json({ message:"User created !" },{status:200})
}