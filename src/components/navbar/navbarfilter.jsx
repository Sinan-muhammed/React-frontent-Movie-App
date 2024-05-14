import { useState } from "react";
import { Link } from 'react-router-dom';



const navbarfilter = ()=>{
    const [action,setAction] = useState(1)



    return (
        <>
             <ul className="flex space-x-10 text-white">
                    <li  onClick={()=>setAction(1)} className={` hover:text-amber-300 ${action ===1 ? "text-amber-300 font-bold" : "text-white"}`} ><Link to="/">Home</Link></li>
                    <li onClick={()=>setAction(2)} className={`hover:text-amber-300 ${action ===2 ? "text-amber-300 font-bold" : "text-white"}`}><Link to="/movies">Movies</Link></li>
                    <li onClick={()=>setAction(3)} className={`hover:text-amber-300 ${action ===3 ? "text-amber-300 font-bold" : "text-white"}`}><Link to="/series">Series</Link></li>
                    <li onClick={()=>setAction(4)} className={`hover:text-amber-300 ${action ===4 ? "text-amber-300 font-bold" : "text-white"}`}><Link to="/login">Login</Link></li>
                </ul>
        </>
    )
}



export default navbarfilter