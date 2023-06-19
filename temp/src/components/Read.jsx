import { useEffect, useState } from "react"
import { AiFillDelete } from "react-icons/ai";
const Read = () => {
     const [data, setData]=useState([])
     const [data1,setData1]=useState([])
     const getUsers= async()=>{
        const response =await fetch("http://localhost:4000/api/ninjas",{
          method:"GET",
          })
          const dat=await response.json()
          setData(dat)
      }
      useEffect(() => {
        getUsers()
      },[]);

      const handleDelete = (city) => {
        fetch(`http://localhost:4000/api/ninjas/${city}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.ok) {
              setData((prevData) => prevData.filter((item) => item.city !== city));
              console.log('Data item deleted successfully.');
            } else {
              throw new Error('Failed to delete data item');
            }
          })
          .catch((error) => {
            console.error('Error occurred while deleting data item:', error);
          });
      };

  return (
    <center>

    <div className="  grid  grid-cols-5 px-4">
{
      data.map((info)=>  
        
      <div className="flex flex-col mt-2 justify-between items-center p-8 shadow-2xl rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<div className="text-center mb-3">
		<h2 className="text-xl font-semibold">{info.city}</h2>
		<p className="text-sm dark:text-gray-400">{info.state}</p>
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-32 h-32 p-6 animate-spin dark:text-yellow-400 fill-current">
		<path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
		<rect width="32" height="48" x="240" y="16"></rect>
		<rect width="32" height="48" x="240" y="448"></rect>
		<rect width="48" height="32" x="448" y="240"></rect>
		<rect width="48" height="32" x="16" y="240"></rect>
		<rect width="32" height="45.255" x="400" y="393.373" transform="rotate(-45 416 416)"></rect>
		<rect width="32.001" height="45.255" x="80" y="73.373" transform="rotate(-45 96 96)"></rect>
		<rect width="45.255" height="32" x="73.373" y="400" transform="rotate(-45.001 96.002 416.003)"></rect>
		<rect width="45.255" height="32.001" x="393.373" y="80" transform="rotate(-45 416 96)"></rect>
	</svg>
	<div className="mb-2 text-3xl font-semibold"> {info.maxTemp}
		<span className="mx-1 font-normal">/</span>{info.minTemp} 
	</div>

<h1 onClick={()=>handleDelete(info.city)} className="float-left ">{<AiFillDelete/>}</h1>
</div>
      )
    }
    </div>
    </center>
  )
}
export default Read