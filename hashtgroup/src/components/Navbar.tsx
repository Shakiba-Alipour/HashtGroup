import React, {useEffect, useState} from "react";
import MainLogo from "../assets/MainLogo"
import Logo from "../assets/Logo";
import {Button} from "antd";
import {MenuOutlined} from "@ant-design/icons";

const menuItems = [
    {path: "description", label: "توضیحات", key: "description-key"},
    {path: "game", label: "بازی", key: "game-key"},
    {path: "invitation", label: "دعوت از دوستان", key: "invitation-key"},
    {path: "leaderboard", label: "لیدربورد", key: "leaderboard-key"}
]

const Navbar: React.FC = () => {
    // To hold the active path
    const [activeSection, setActiveSection] = useState("description")


    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             const visibleEntry = entries.find(entry => entry.isIntersecting && entry.intersectionRatio >= 0.3);
    //
    //             if (visibleEntry) {
    //                 setActiveSection(visibleEntry.target.id);
    //             }
    //         },
    //         {threshold: 0.3}
    //     );
    //
    //     menuItems.forEach(({path}) => {
    //         const element = document.getElementById(path);
    //         if (element) observer.observe(element);
    //     });
    //
    //     return () => observer.disconnect();
    // }, []);
    const handleClick = (id: string) => {
        setActiveSection(id)
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    // To check the screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 780);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return <header
        className="w-full fixed flex flex-row z-50 align-middle justify-around pt-4 pb-4 border-b-blue-950 bg-Background border-b-Text text-Light-Surface"
    >

        <ul className="flex flex-row justify-around w-max gap-x-4 md:gap-x-8 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-28 flex-wrap align-middle">
            {menuItems.map(({path, label, key}) => {
                const isActive = activeSection === path
                return <div key={key}
                            className="flex flex-col align-middle cursor-pointer text-xs sm:text-sm md:text-md lg:text-base xl:text-base 2xl:text-lg"
                            onClick={() => handleClick(path)}>
                    <li id={key}>{label}</li>
                    {isActive && <span
                        className="absolute bg-Light-Primary shadow-Light-Shadow w-2 h-2 rounded-full top-[45px] self-center"/>}
                </div>

            })}
        </ul>

        {isMobile ? <Logo/> : <MainLogo/>}
    </header>
}

export default Navbar