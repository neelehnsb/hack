import { useEffect, useState } from 'react'
import deleteIcon from '../images/icons8-delete_2.svg'
import Image from 'next/image'


const FormModule = ({setMicroservices, microservices, projectName, id, deleted, setDeleted})=>{
    const [service, setService] = useState(undefined)
  const [branch, setBranch] = useState(undefined)
  const [check, setCheck] = useState()
  function Delete(){
    const temp = [...microservices]
        setMicroservices(temp.filter((value)=>value.id!==id))
        const temp2 = [...deleted]
        temp2.push(id)
        setDeleted(temp2)
  }
  useEffect(()=>{
    if( branch && service){
        const temp = [...microservices].filter((value)=>value.id!==id)
        setMicroservices([...temp, {id:id, projectName:projectName, branchName:branch, serviceName:service}])
    }else{
        const temp = [...microservices]
        setMicroservices(temp.filter((value)=>value.id!==id))
        
    }
  }, [ branch, service])
    return (
        <>
        <div className='w-fit  p-4 mx-auto ' >
            <form >
                <div className='flex flex-col gap-2 ' >
                <div className='flex justify-between gap-4' >
                    <div className='mx-2' >

                        <span className='pl-2' >
                            <label htmlFor="cars">Choose a Microservice :</label>
                            <select defaultValue={'select'} value={service} onChange={(e)=>{setService(e.target.value)}} className='border px-2 py-1 rounded-md ml-2'  id="cars" name="cars">
                                <option value="none" selected hidden >Select</option>
                                <option value="auth">auth</option>
                                <option value="penpencil-backend">penpencil-backend</option>
                                <option value="user">user</option>
                                <option value="batches">batches</option>
                                <option value="doubt">doubt</option>
                                <option value="comment">comment</option>
                                <option value="form">form</option>
                                <option value="mqtt">mqtt</option>
                                <option value="test-service">test-service</option>
                            </select>
                        </span>
                    </div>
                    <div>
                        <span className='pl-2' >
                            <label htmlFor="cars">Choose a Branch :</label>
                            <select defaultValue={'select'} value={branch} onChange={(e)=>{setBranch(e.target.value)}} className='border px-2 py-1 rounded-md ml-2'  id="cars" name="cars">
                                <option value="none" selected  hidden>Select</option>
                                <option value="Branch1">Branch1</option>
                                <option value="Branch2">Branch2</option>
                                <option value="Branch3">Branch3</option>
                                <option value="Branch4">Branch4</option>
                            </select>
                        </span>
                    </div>
                    <span onClick={Delete}  ><Image width={40} height={40} src={deleteIcon} /></span>
                </div>
                </div>
            </form>

            
            
            
        </div>
        </>
        
    )
}

export default FormModule