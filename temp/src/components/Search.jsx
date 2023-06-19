import { useEffect, useState } from "react"
import { json } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

const Search = () => {
const [cit,setCity]=useState([])
const [res ,setRes]=useState([])
const [searc,setSearch]=useState("")

const getData = async()=>{
const result=await fetch("http://localhost:4000/api/ninjas/",{
    method:"GET"
})
const data=await result.json()
setRes(data)
}

useEffect(() => {
    getData()
}, []);

const findCity =()=>{
    const cite = res. find((i)=>
         i.city.toLowerCase()===searc.toLowerCase()
    ) 
    setCity(cite)
}

const handleChange=(e)=>{
    setSearch(e.target.value)
    
}

const handleClick=(e)=>{
    e.preventDefault()
    findCity();
  
 document.getElementById("main").hidden=false
    console.log(cit)
}


  return (
    <div>
    <form className=" h-12  items-center  px-4" onSubmit={handleClick}>
        <input type="text"
        placeholder="Enter City"
        onChange={handleChange} value={searc} />
        <button className="primary-button ms-3" >
         find
        </button>
    </form>

  

    <div className="flex justify-center" id="main" hidden>
    
    { cit ? (
    <div className=" mains-card flex ms-2 flex-col mt-9  p-10 rounded-3xl w-60 sm:px-12 min-w-[350px]  dark:text-gray-100">
    <img className="p-4" src="./mintemp.png" alt="h" />
      <div className="">
      <div className="mb-2 text-5xl font-semibold "> {cit.maxTemp}°C
      <span className="mx-1 font-normal">/</span><span>{cit.minTemp}</span>
        <h2 className="text-xl font-semibold uppercase">{cit.city}</h2>
        <p className="text-sm ">{cit.state}</p>
      </div>
   
      </div>
    
    </div>
  
    ):(  <div>
       <h1 className="font-extrabold">City Not Found!</h1>
    </div>
    
    )
    }
    </div>



    
    </div>
  )
}
export default Search