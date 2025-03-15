import React, {useEffect, useState} from "react";
import MainLogo from "../assets/MainLogo"
import Logo from "../assets/Logo";

const Navbar = () => {
    // To hold the active path
    const [activeSection, setActiveSection] = useState("description")

    // To check the screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 780);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const menuItems = [
        {path: "description", label: "توضیحات", key: "description"},
        {path: "game", label: "بازی", key: "game"},
        {path: "invitation", label: "دعوت از دوستان", key: "invitation"},
        {path: "leaderboard", label: "لیدربورد", key: "leaderboard"}
    ]

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return <header
        className="w-full sticky flex flex-row align-middle justify-around pt-4 pb-4 border-b-blue-950 bg-Background border-b-Text text-Light-Surface"
        style={{
            background: `background: linear-gradient(270deg, rgba(6, 15, 41, 0.6) 0%, rgba(6, 15, 41, 0) 49.5%, rgba(6, 15, 41, 0.6) 100%), url(blue-purple-brick-wall-textured-background.jpg);
        opacity: 0.4;`
        }}>
        <ul className="flex flex-row justify-around w-2/5 flex-wrap align-middle">
            {menuItems.map(({path, label, key}) => {
                const isActive = activeSection === path
                return <div key={key} className="flex flex-col align-middle cursor-pointer" onClick={() => handleScroll(path)}>
                    <li id={path}>{label}</li>
                    {isActive && !isMobile && <span
                        className="absolute bg-Light-Primary shadow-Light-Shadow w-2 h-2 rounded-full top-[45px] self-center"/>}
                </div>
            })}
        </ul>
        {isMobile ? <Logo/> : <MainLogo/>}
    </header>
}

export default Navbar