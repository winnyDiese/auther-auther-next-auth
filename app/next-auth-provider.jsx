"use client"
import {sessionProvider} from "next-auth/react"

export const NextAuthProvider = ({children})=>{
    return <sessionProvider>{children}</sessionProvider>
}