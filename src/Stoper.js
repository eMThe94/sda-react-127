import { useState } from "react";

export default function Stoper(props) {
    const [seconds, setSeconds] = useState(0);

    const tick = () => {
        setSeconds(seconds => seconds + 1);
        console.log(seconds);
    };

    const startStoper = () => {
        setInterval(() => tick(), 1000);
    }

    return (
        <div>
            <div>{seconds}</div>
            <div>Hello {props.name}</div>
            <button onClick={startStoper}>Start Stoper</button>
        </div>
    );
}