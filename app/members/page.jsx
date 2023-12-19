"use client"
import {signOut, useSession} from "next-auth/react"
import { redirect } from "next/navigation"

const Page = () => {
    const {data:session, status} = useSession()
    if(!session) redirect("/sign-in")

    const handleLogout = ()=> {
        signOut()
    }

    return (
        <div>
            Members Page

            <p> {session?.user?.name}</p>
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
