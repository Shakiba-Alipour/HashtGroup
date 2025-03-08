import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Description from "./components/Description";

function App() {
    return (
        <div className="App w-full flex flex-col items-center">
            <Navbar/>
            <Description/>
        </div>
    );
}

export default App;
