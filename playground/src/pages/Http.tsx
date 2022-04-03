import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

export default function UseEffect () {
    const theme = useContext(themeContext);
    return (
        <div style={ { backgroundColor: theme?.backgroundColor } }>HTTP CRUD Workflow</div>
    );
}