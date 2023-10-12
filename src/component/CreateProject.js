import { useRouter } from "next/router"

const { useState, useReducer } = require("react")

export const CreateProject = ({setCheck})=>{
    const [projName, setProjName] = useState()
    const router = useRouter()
    return (
        <div className="flex flex-col justify-center align-middle items-center gap-2 mt-2 w-96 " >
                <div className=" text-2xl !mb-4 pb-4" >What's your Project Name</div>
                <div className="mt-10">
                    <input className="border-2 rounded-md px-4 text-2xl"  placeholder="Enter Project name" value={projName} onChange={(e)=>{setProjName(e.target.value)}} />
                </div>
                <button onClick={()=>{setCheck(false);router.push(`/${projName}`) }} className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" >Create</button>
        </div>
    )
}