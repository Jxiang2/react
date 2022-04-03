import { useContext } from "react";
import { themeContex } from "../contexts/themeContext";

export default function UseEffect () {
    const theme = useContext(themeContex);
    return (
        <div style={ { backgroundColor: theme?.backgroundColor } }>HTTP CRUD Workflow</div>
    );
}