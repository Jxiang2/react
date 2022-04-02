import { useCallback, useContext, useState } from "react";
import { ThemeContex } from "../contexts/ThemeContext";
import HomeList from "../Components/HomeList";


export default function Home () {
    const [num, setNum] = useState(1);
    const [dark, setDark] = useState(false);
    const theme = useContext(ThemeContex);

    // only num changes, getItems re-react
    const getItems = useCallback((increment: number) => {
        return [num, Math.floor(num + increment - increment / 2), num + increment];
    }, [num]);

    const subtheme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    };

    return (
        <div style={ { ...subtheme, backgroundColor: theme.backgroundColor } }>
            <p>homepage & useCallback demo</p>
            <input
                type="number"
                value={ num }
                onChange={ e => setNum(Number(e.target.value)) }
            />

            <button onClick={ () => setDark(prevDark => !prevDark) }>
                Subtheme
            </button>
            <button>
                Macrotheme
            </button>

            <HomeList getItems={ getItems } />
        </div>
    );
}

