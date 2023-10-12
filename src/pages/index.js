import { useEffect, useState } from 'react'
import FormModule from '@/component/FormModule'
import { useRouter } from 'next/router'
import { CreateProject } from '@/component/CreateProject'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [projCount, setProjCount] = useState([1])
  const [formData, setFormData] = useState()
  const router = useRouter()
  const [check, setCheck] = useState(false)
  if(!loggedIn) return (
    <>
    <div className='w-screen h-screen flex flex-col gap-4' >
      <div className='w-full mt-12' >
        <p className='text-2xl w-fit mx-auto' >Please Log In to Continue</p>
      </div>
      <div className='w-full flex justify-center' >
        <button className=' px-4 py-2 bg-gradient-to-r mx-auto w-fit from-cyan-500 to-blue-500 text-black rounded-lg' onClick={()=>{setLoggedIn(true)}} >
          Login
        </button>
      </div>
      
    </div>
    </>
  )

  if(loggedIn) return (
    <>
    <div className='flex flex-col gap-4' >
      <p className='text-2xl mx-auto w-fit' >Welcome</p>
    </div>

    <div onClick={()=>{setCheck(true)}} className=' ease-in-out  flex justify-center' >
      <button className=' rounded-lg border bg-gradient-to-r mx-auto from-cyan-400 to-blue-400 px-4 py-2' >Create Project</button>
    </div>

    {check && 
      <div onClick={()=>{setCheck(false)}} className=' w-screen flex justify-center items-center  h-screen backdrop-blur-sm  fixed top-0 left-0' >
        <div onClick={(e)=>{e.stopPropagation()}} className='w-[500px] h-80 border shadow-lg shadow-rose-300'  >
          <CreateProject setCheck={setCheck} />
        </div>
      </div>}


    {/* <div className='border-2  border-teal-500 rounded-lg w-fit mx-auto p-3'>
      {projCount?.map((value)=>(<FormModule/>))}
      <div className='w-full flex justify-center mt-3' >
          <button onClick={()=>{
            setProjCount([...projCount, 1])
          }} className=' w-fit px-4 mx-auto rounded-md py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white ' >Add Project</button>
      </div>
      <div className='w-full flex justify-center mt-3' >
          <button  className=' w-fit px-4 mx-auto rounded-md py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white ' >Submit</button>
      </div>

    </div> */}
    
    </>
  )
}
