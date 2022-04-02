import { useCallback, useState } from "react";

import HomeList from "../Components/HomeList";

export default function Home () {
    const [num, setNum] = useState(1);
    const [dark, setDark] = useState(false);
    
    // only num changes, getItems re-react
    const getItems = useCallback((increment: number) => {
        return [num, Math.floor(num + increment - increment/2), num + increment]
    }, [num]);

    const theme = {
        backgroundColor: dark ? "#333": "#FFF",
        color: dark ? "#FFF" : "#333"
    }

    return (
        <div style = {theme}>
            <p>homepage & useCallback demo</p>
            <input
             type="number"
             value={num}
             onChange={e=>setNum(Number(e.target.value))} 
            />

            <button onClick={()=>setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>
            <HomeList getItems={getItems}/>
        </div>
    );
}

