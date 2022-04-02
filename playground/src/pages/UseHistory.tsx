import { useNavigate } from "react-router-dom";
import "./UseHistory.css";

export default function UseHistory () {
    const navigate = useNavigate();

    return (
        <div>
            useNavigate
            <button onClick={ () => navigate("/") }>try this</button>
        </div>

    );
}
