import { useEffect, useState } from "react";





const Card = () => {
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
    <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<div className="text-center">
		<h2 className="text-xl font-semibold">{cityWithMaxTemp.city}</h2>
		<p className="text-sm dark:text-gray-400">{cityWithMaxTemp.state}</p>
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-32 h-32 p-6 dark:text-yellow-400 fill-current">
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
	<div className="mb-2 text-3xl font-semibold"> {cityWithMaxTemp.maxTemp}
		<span className="mx-1 font-normal">/</span>{cityWithMaxTemp.minTemp} 
	</div>
	<p className="dark:text-gray-400">Partly cloudy</p>
</div>
  )
}
export default Card