import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { themeContex } from "../contexts/themeContext";

export default function UseHistory () {
    const navigate = useNavigate();
    const theme = useContext(themeContex);
    return (
        <div style={ { display: "grid", backgroundColor: theme?.backgroundColor } }>
            useNavigate (useHistory)
            <button onClick={ () => navigate("/") }>go home</button>
            <button onClick={ () => navigate("/ref") }>go ref</button>
            <button onClick={ () => navigate("/reducer") }>go reducer</button>
        </div>
    );
}