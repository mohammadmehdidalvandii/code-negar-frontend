import React, { useEffect, useState } from 'react';
import { FaMoon , FaSun } from "react-icons/fa6";

const BtnTheme:React.FC = ()=>{
    const [theme , setTheme] = useState<string>("light"); 

    useEffect(()=>{
        const saveTheme = localStorage.getItem("theme") || "light";
        if(saveTheme){
            setTheme(saveTheme);
            document.documentElement.classList.toggle("dark",saveTheme === "dark");
        }
    },[])

    const handlerTheme = ()=>{
        const newTheme  = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem('theme', newTheme)
    }

  return (
    <button className="btn_primary w-[50px] text-2xl cursor-pointer"
    onClick={handlerTheme}>
        {theme === "light" ? <FaMoon/> :  <FaSun />}
    </button>
  )
}

export default BtnTheme