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

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: "smooth"});
    }
};

const MobileMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleClick = (id: string) => {
        setIsMenuOpen(false)
        handleScroll(id)
    }

    return <div><Button className="text-white" icon={<MenuOutlined/>} onClick={toggleMenu}/>
        {isMenuOpen && <div>
            <div>
                {menuItems.map((item) => (<div key={item.key}
                                               onClick={() => handleClick(item.key)}>
                    {item.label}
                </div>))}
            </div>
        </div>}
    </div>
}

const DesktopMenu: React.FC = () => {
    // To hold the active path
    const [activeSection, setActiveSection] = useState("description")

    const handleClick = (id: string) => {
        setActiveSection(id)
        handleScroll(id)
    }

    return <ul className="flex flex-row justify-around gap-x-4 w-2/5 flex-wrap align-middle">
        {menuItems.map(({path, label, key}) => {
            const isActive = activeSection === path
            return <div key={key} className="flex flex-col align-middle cursor-pointer"
                        onClick={() => handleClick(path)}>
                <li id={key}>{label}</li>
                {isActive && <span
                    className="absolute bg-Light-Primary shadow-Light-Shadow w-2 h-2 rounded-full top-[45px] self-center"/>}
            </div>

        })}
    </ul>
}

const Navbar: React.FC = () => {

    // To check the screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 780);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return <header
        className="w-full fixed flex flex-row align-middle justify-around pt-4 pb-4 border-b-blue-950 bg-Background border-b-Text text-Light-Surface"
    >
        {isMobile ? <> </> : <DesktopMenu/>}
        {isMobile ? <Logo/> : <MainLogo/>}
    </header>
}

export default Navbar