import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import Game from "./components/Game";
import Invitation from "./components/Invitation";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App w-full flex flex-col items-center">
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
