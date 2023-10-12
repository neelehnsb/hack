import { useRouter } from "next/router"

const { useState, useReducer } = require("react")
const alphs = 'abcdefghijklmnopqrstuvwxyz'



export const CreateProject = ({setCheck})=>{
    const [projName, setProjName] = useState()
    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
    
        setProjName(result);
      };
    const router = useRouter()
    return (
        <div className="flex flex-col justify-center align-middle items-center gap-2 mt-2 w-96 " >
                <div className=" text-2xl !mb-4 pb-4" >What's your Project Name</div>
                <div className="mt-10">
                    <input onKeyDown={(event)=>  /[a-z]/.test(event.key)}  className="border-2 rounded-md px-4 text-2xl" maxLength={3}  placeholder="Enter Project name" value={projName} onChange={handleChange} />
                </div>
                <button onClick={()=>{setCheck(false);router.push(`/${projName}`) }} className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" >Create</button>
        </div>
    )
}