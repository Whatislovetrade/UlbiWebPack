import React, { useState } from "react";
import './App.scss'

export const App = () => {
    const  [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)

    return (
        <><div>
            <h1>{count}</h1>
        </div><button onClick={increment}><span>sdfsdf</span>inc</button></>
    )
}