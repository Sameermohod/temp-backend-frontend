import { useEffect, useState } from "react"


const Min = () => {
    const [temperatures, setTemperatures] = useState([]);
    const [cityWithMaxTemp, setCityWithminTemp] = useState('');


    useEffect(() => {
        fetch('http://localhost:4000/api/ninjas/')
          .then(response => response.json())
          .then(data => {
            setTemperatures(data);
            findCityWithMinTemp(data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

      const findCityWithMinTemp = (data) => {
        const city = data.reduce((prev, current) => {
          return prev.minTemp < current.minTemp ? prev : current;
        });
    
        setCityWithminTemp(city);
      };
      
      
      
      return (
        <div className="flex justify-center">
    
    <div className=" mainm-card flex ms-2 flex-col  p-10 rounded-3xl w-60 sm:px-12 min-w-[350px]  dark:text-gray-100">
    
    <img className="p-4 animate-pulse" src="./mintemp.png" alt="h" />
      <div className="">
      <div className="mb-2 text-5xl font-semibold "> {cityWithMaxTemp.minTemp}°C
        <h2 className="text-xl font-semibold uppercase">{cityWithMaxTemp.city}</h2>
        <p className="text-sm ">{cityWithMaxTemp.state}</p>
      </div>
   
      </div>
    
    </div>
  
    </div>
  )
};

export default Min