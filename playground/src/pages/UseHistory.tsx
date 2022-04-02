import { useNavigate } from "react-router-dom";
export default function UseHistory () {
    const navigate = useNavigate();

    return (
        <div style={ { "display": "grid" } }>
            useNavigate (useHistory)
            <button onClick={ () => navigate("/") }>go home</button>
            <button onClick={ () => navigate("/ref") }>go ref</button>
            <button onClick={ () => navigate("/reducer") }>go reducer</button>
        </div>


    );
}
