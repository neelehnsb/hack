import FormModule from "@/component/FormModule"
import { useEffect, useState } from "react"

const { useRouter } = require("next/router")

const project = ()=>{
    const router = useRouter()
    const [projCount, setProjCount] = useState([1])
    const [microservices, setMicroservices] = useState([])
    useEffect(()=>{
        console.log(microservices)
    }, [microservices])

    return (
        <>
            <p className="text-3xl mx-auto w-fit my-4" >{router.query.projectName}</p>
            <div className="border bg-gradient-to-r from-lime-400 to-purple-400 rounded-lg  border-green-400 shadow-md hover:shadow-md p-3 hover:shadow-green-500 shadow-green-300 w-[700px] mx-auto" >
                <div className=" flex flex-col gap-4" >

                    {projCount?.map((value, ind)=>(<FormModule key= {ind} id={ind} projectName={router.query.projectName} microservices={microservices} setMicroservices={setMicroservices} />))}
                </div>
                <div className='w-full flex gap-2 justify-center mt-3' >
                    <button onClick={()=>{
                        setProjCount([...projCount, 1])
                    }} className=' w-fit px-4 mx-auto rounded-md py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white ' >Add </button>
                </div>
                <div className='w-full flex justify-center mt-3' >
                    <button  className=' w-fit px-4 mx-auto rounded-md py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white ' >Submit</button>
                </div>
            </div>
        </>
    )
}

export default project