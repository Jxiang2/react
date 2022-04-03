import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";
import { useAxios } from "../Hooks/useAxios";

export default function UseEffect () {
    const theme = useContext(themeContext);
    useAxios();

    return (
        <div style={ { backgroundColor: theme?.backgroundColor } }>HTTP CRUD Workflow</div>
    );
}