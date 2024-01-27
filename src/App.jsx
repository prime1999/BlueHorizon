import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <h1 className="font-nova text-3xl text-darkBlue">
                    Blue<span className="text-blue">Horizon</span>
                </h1>
                <p className="font-kanit font-semibold text-red">Discover the World, Create Memories</p>
            </div>
        </div>
    );
}

export default App;
