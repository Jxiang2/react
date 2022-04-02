import { useState, useRef, useEffect } from "react";

export default function UseRef () {

    const [name, setName] = useState("");
    const rerenderCount = useRef(1);

    useEffect(() => {
        rerenderCount.current = rerenderCount.current + 1;
        console.log(rerenderCount);
    }, []);

    return (
        <div>
            <input value={ name } onChange={ e => setName(e.target.value) } />
            <div>My name is { name }</div>
            <div>I rendered { rerenderCount.current }</div>
        </div>);
}
