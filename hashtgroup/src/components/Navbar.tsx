import React, {useEffect, useState} from "react";
import Logo from "../assets/Logo"

const Navbar=()=>{
    // To hold the active path
    const [activeSection,setActiveSection]=useState("description")


    const menuItems=[
        {path:"description",label:"توضیحات", key:"description"},
        {path:"game",label:"بازی", key:"game"},
        {path:"invitation",label:"دعوت از دوستان", key:"invitation"},
        {path:"leaderboard",label:"لیدربورد", key:"leaderboard"}
    ]

    // useEffect({},[])

    return<header className="w-full flex flex-row justify-around mt-4 mb-4 border-b-blue-950 bg-Background">
        <div className="flex flex-row justify-around w-1/3">
            {menuItems.map(({path, label, key}) => {
                const isActive=""
                return <div key={key}>
                    <a href={path}>{label}</a>
                    {isActive&& <span className="absolute bg-Light w-1 h-1 rounded-full bottom-[-10px]"/>}
                </div>
            })}
        </div>
        <Logo />
    </header>
}

export default Navbar