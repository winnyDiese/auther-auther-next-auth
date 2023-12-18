"use client"
import {signOut, useSession} from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"

const Page = () => {
    const {data:session} = useSession()
    if(!session) redirect("/sign-in")

    const handleLogout = ()=> {
        signOut()
    }

    return (
        <div>
            Members Page

            <p> {session?.user?.fullname}</p>
            <button 
                onClick={handleLogout}
                className="bg-black text-white p-3"
            >
                Logout
            </button>
        </div>
    );
}

export default Page;
