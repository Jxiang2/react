import { useState, useRef, useEffect } from "react";

export default function UseRef () {
    const [name, setName] = useState("");

    // usecase 1: access DOM elements
    const inputRef = useRef<HTMLInputElement>(null);
    const focus = () => inputRef.current?.focus();

    // usecase 2: ref presist but not cause re-render
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current += 1;
    });

    // usecase 3: ref presist but not cause re-render
    const previousName = useRef(name);
    useEffect(() => {
        previousName.current = name;
    }, [name]);

    return (
        <div>
            <input
                ref={ inputRef }
                value={ name }
                onChange={ e => setName(e.target.value) }
            />
            <button onClick={ focus }>focus</button>

            <p>My name is { name }</p>
            <p>My previous name is { previousName.current }</p>
            <p>Already rendered { renderCount.current } times</p>
        </div>);
}
