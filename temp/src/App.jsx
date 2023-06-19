import { Route,Routes } from "react-router-dom"
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Read from "./components/read";
import Max from "./components/Max";
import Min from "./components/Min";
import Search from "./components/Search";
import Head from "./components/Head";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="text-center ">
    <Navbar/>
    <Routes>
     <Route path="/" element={<Head/>} />
      <Route  exact path="/create" element={<Create/>} />
      <Route exact path="/read" element={<Read/>} />
      <Route path="maxtemp"  element={<Max/>}/>
      <Route path="mintemp" element={<Min/>}/>
      <Route path="search" element={<Search/>}>
      </Route>
    </Routes>
    <ToastContainer position="top-center" limit={1}/> 
    </div>
  )
}
export default App