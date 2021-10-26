import { useState, useEffect } from "react";

const useCount = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(counter);
        setCounter(counter + 1);
    }, [])

    const increment = () => {
        setCounter(counter + 1);
    }

    return { counter, increment };
}

export default useCount;