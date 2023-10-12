import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect, useState } from "react"

export const Header = ()=>{
    const {data:session} = useSession()
    const [imageUrl, setImageUrl] = useState('')
    useEffect(()=>{setImageUrl(session?.user?.image)}, [session])
    return (
        <>
        <div className="w-screen h-14 border bg-gradient-to-r from-slate-300 to-slate-950 flex justify-start items-center ">
            {session && <img onClick={()=>{signOut()}} width={40} height={40} className=" rounded-full" src={imageUrl||''} />}
            {!session && <button onClick={()=>{signIn('google')}} className="px-4 py-2" >Login</button>}
        </div>
        </>
        
    )
}