"use client"
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = () => {
    const {data: session} = useSession()
    if(session) redirect("/members")
    
    const handleSubmit = async e=>{
        e.preventDefault()

        // const form = {
        //     email:"frdrcpeter@gmail.com",
        //     password:"azerty"
        // }

        const form = {
            email:"maradona@gmail.com",
            password:"123"
        }

        const res = await signIn("credentials", {
            ...form,
            redirect: false
        })

    }

    return (
        <div>
            Sign-in
            <form action="" onSubmit={handleSubmit} id="form-login">
                <button className='bg-black text-white p-3' form="form-login">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Page;
