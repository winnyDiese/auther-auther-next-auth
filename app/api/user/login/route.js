import user from "@/models/User"
import { connect } from "mongoose"
import { NextResponse } from "next/server"


export async function POST(request){
    await connect(process.env.MONGODB_URL) 
    console.log("Connection DataBase is correct !")
    const {email,password} = await request.json()
    const users = await user.findOne({email:email})
    if(users.password === password) return NextResponse.json({message:"User founded !",users})
    return NextResponse.json({message:"Email or password is incorrect !"})
}
