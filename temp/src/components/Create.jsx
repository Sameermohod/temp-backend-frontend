import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Create = () => {
   const[data ,setData]=useState({})
   const[searc,setSearc]=useState("")
   const [data1, setData1]=useState([])

    const handleChange=(e)=>{

      const {name,value}=e.target
        setData({
            ...data,
            [e.target.name]:e.target.value
          })
          if(name==="city"){
        setSearc(e.target.value)
          }
    }

    const getUsers= async()=>{
       const response =await fetch("http://localhost:4000/api/ninjas",{
         method:"GET",
         })
         const dat=await response.json()
         setData1(dat)
     }

     useEffect(() => {
       getUsers()
     },);

   
    const handleSubmit= async(e)=>{

      e.preventDefault()
      const cityes = data1.find(dat=>dat.city===searc)
      if(!cityes){
        const response =await fetch("http://localhost:4000/api/ninjas",{
          method:"POST",
          body:JSON.stringify(data),
          headers:{
            "Content-Type":"application/json"
          }
        })  
        const deta=await response.json()
        toast.success("City is Added!");
      } 
      else{
        toast.error("City is exist!");      
        return false
      }
    }
    
    
          
   

  return (
    <div className="mx-auto shadow-lg shadow-green-600 max-w-screen-md bg-white p-5 rounded-3xl ">
        <form  onSubmit={handleSubmit}>
        <h1 className="mb-4 text-xl">
            Add Data
            </h1>
            <div className="mb-4">
   <label className="text-left">City</label>
   <input className="w-full input"  type="text" name="city" required onChange={handleChange} value={searc} />
            </div>
            <div className=" mb-4">
   <label >State</label>
   <input type="text" className="w-full" required  name="state" onChange={handleChange}/>
            </div>
            <div className="mb-4">

   <label>maxTemp</label>
   <input type="text" className="w-full" required  name="maxTemp" onChange={handleChange}/>
            </div>
            <div className="mb-4">

   <label>minTemp</label>
   <input className="w-full"  type="text" required name="minTemp" onChange={handleChange} />
            </div>
            <div className="mb-4">
    <input className="primary-button" type="submit" value="submit" />
            </div>
        </form>
           </div>
  )
}
export default Create