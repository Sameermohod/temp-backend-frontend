import { useEffect, useState } from "react"


const Max = () => {
    const [temperatures, setTemperatures] = useState([]);
    const [cityWithMaxTemp, setCityWithMaxTemp] = useState('');
    const [temp ,setTemp]=useState("")


    useEffect(() => {
        fetch('http://localhost:4000/api/ninjas/')
          .then(response => response.json())
          .then(data => {
            setTemperatures(data);
            findCityWithMaxTemp(data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

      const findCityWithMaxTemp = (data) => {
        const cit = data.reduce((prev, current) => {
          return prev.maxTemp > current.maxTemp ? prev : current;
        });  
        setCityWithMaxTemp(cit);
    
      };


 
  return (
    <div className="flex justify-center">
    
    <div className=" main-card flex ms-2 flex-col  p-10 rounded-3xl w-60 sm:px-12 min-w-[350px]  dark:text-gray-100">
    {
cityWithMaxTemp.maxTemp>=20 ? (<img className="p-4 animate-pulse" src="./maxtemp.png" alt="h" />):(    
    <img className="p-4 " src="./cold.png" alt="h" />)
    }
    <div className="">
    <div className="mb-2 text-5xl font-semibold "> {cityWithMaxTemp.maxTemp}°C
      <h2 className="text-xl font-semibold uppercase">{cityWithMaxTemp.city}</h2>
      <p className="text-sm ">{cityWithMaxTemp.state}</p>
    </div>
 
    </div>
  
  </div>
  
    </div>
  )
}
export default Max