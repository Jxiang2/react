import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { themeContext } from "../contexts/themeContext";

export default function UseHistory () {
    const navigate = useNavigate();
    const theme = useContext(themeContext);
    return (
        <div style={ { display: "grid", backgroundColor: theme?.backgroundColor } }>
            useNavigate (useHistory)
            <button onClick={ () => navigate("/") }>go home</button>
            <button onClick={ () => navigate("/ref") }>go ref</button>
            <button onClick={ () => navigate("/reducer") }>go reducer</button>
        </div>
    );
}