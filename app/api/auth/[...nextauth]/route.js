
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    session:{
        maxAge:85000,
        strategy:"jwt"
    },
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id = user.token
                token.data = user
            }
            return token
        },
        async session({session,token,user}){
            const userInfo = token?.data?.data
            session.user = userInfo
            session.token = userInfo.token
            return session
        }
    },
    pages:{
        signin:"/sign-in"
    },
    secret:"secretbetsportsprojecttoken",
    providers:[
        CredentialsProvider({
            type:"credentials",
            credentials:{},
            async authorize(credentials,req){
                const Options = {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                        email: credentials.email,
                        password: credentials.password   
                    })
                }

                const response = await fetch( "https://api-bet-sports.onrender.com/api/users/login",Options)

                const json = await response.json()
                if(!json.state) throw new Error(json.message)
                console.log(json)
                return json
            }
        })
    ]
})

export {handler as POST, handler as GET}