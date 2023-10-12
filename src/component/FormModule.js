import { useEffect, useState } from 'react'


const FormModule = ({setMicroservices, microservices, projectName, id})=>{
    const [service, setService] = useState(undefined)
  const [branch, setBranch] = useState(undefined)
  const [check, setCheck] = useState()

  function handle(value){
    setCheck(value)
  }
  useEffect(()=>{
    if(check && branch && service){
        setMicroservices([...microservices, {id:id, projectName:projectName, branchName:branch, serviceName:service}])
    }else{
        const temp = [...microservices]
        console.log(temp.filter((value)=>value.id!==id))
        setMicroservices(temp.filter((value)=>value.id!==id))
        
    }
  }, [check, branch, service])
    return (
        <>
        <div className='w-fit  p-4 mx-auto ' >
            <form >
                <div className='flex flex-col gap-2 ' >
                <div className='flex justify-between gap-4' >
                    <div className='mx-2' >

                        <span className='pl-2' >
                            <label for="cars">Choose a Microservice :</label>
                            <select defaultValue={'select'} value={service} onChange={(e)=>{setService(e.target.value)}} className='border px-2 py-1 rounded-md ml-2'  id="cars" name="cars">
                                <option value="none" selected hidden >Select</option>
                                <option value="Service1">service1</option>
                                <option value="Service2">Service2</option>
                                <option value="Service3">Service3</option>
                                <option value="Service4">Service4</option>
                            </select>
                        </span>
                    </div>
                    <div>
                        <span className='pl-2' >
                            <label for="cars">Choose a Branch :</label>
                            <select defaultValue={'select'} value={branch} onChange={(e)=>{setBranch(e.target.value)}} className='border px-2 py-1 rounded-md ml-2'  id="cars" name="cars">
                                <option value="none" selected  hidden>Select</option>
                                <option value="Branch1">Branch1</option>
                                <option value="Branch2">Branch2</option>
                                <option value="Branch3">Branch3</option>
                                <option value="Branch4">Branch4</option>
                            </select>
                        </span>
                    </div>
                    <input type='checkbox' height={20} width={20} onChange={(e)=>{handle(e.target.checked)}} />
                </div>
                </div>
            </form>

            
            
            
        </div>
        </>
        
    )
}

export default FormModule