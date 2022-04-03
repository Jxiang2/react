import { useCallback, useContext, useState } from "react";
import { themeContex } from "../contexts/themeContext";
import HomeList from "../Components/HomeList";


export default function Home () {
    const context = useContext(themeContex);
    const [num, setNum] = useState(1);
    const [subTheme, setSubTheme] = useState(false);

    // only num changes, getItems re-creact
    const getItems = useCallback((increment: number) => {
        return [num, Math.floor(num + increment - increment / 2), num + increment];
    }, [num]);

    const subtheme = {
        color: subTheme ? "#FFF" : "#333"
    };

    return (
        <div style={ { ...subtheme, backgroundColor: context?.backgroundColor } }>
            **Home Page**
            <p>useCallback & props demo</p>
            <input
                type="number"
                value={ num }
                onChange={ e => setNum(Number(e.target.value)) }
            />

            <button onClick={ () => setSubTheme(prevDark => !prevDark) }>
                Subtheme
            </button>

            <HomeList getItems={ getItems } />
        </div>
    );
}

