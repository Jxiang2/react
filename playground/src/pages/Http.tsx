import { useContext } from "react";
import { ThemeContex } from "../contexts/ThemeContext";

export default function UseEffect () {
    const theme = useContext(ThemeContex);
    return (
        <div style={ { backgroundColor: theme.backgroundColor } }>HTTP CRUD Workflow</div>
    );
}