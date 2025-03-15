import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import Game from "./components/game/Game";
import Invitation from "./components/Invitation";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App bg-[url('/src/assets/background/bg.svg')]  bg-Background w-full flex flex-col items-center self-center align-middle">
            <Navbar/>
            <Description/>
            <Game/>
            <Invitation code="A-21052"/>
            <Leaderboard/>
            <Footer/>
        </div>
    );
}

export default App;
