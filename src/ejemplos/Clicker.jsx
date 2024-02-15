import { useState } from "react";
import { Button } from "react-bootstrap";

export const Clicker = ({init = 0, step = 1}) => {
    const [counter, setCounter] = useState(init)

    const sumar = () => {
        setCounter(counter + step)
        console.log(counter)
    }

    const restar = () => {
        setCounter(counter - step)
        console.log(counter)
    }

    const reset = () => {
        setCounter(init)
        console.log(counter)
    }

    return (
        <div>

            <h2>Clicker</h2>
            <hr/>

            <Button onClick={sumar}>Sumar</Button>
            <Button onClick={restar}>Restar</Button>
            <Button variant="secondary" onClick={reset}>Reset</Button>

            <p>{counter}</p>

        </div>
    )
}