import { useState } from "react";

const useCounter = ({initial = 0, upperBound = 10, lowerBound = 0}) => {
    const [counter, setCounter] = useState(initial);

    const handleInc = () => {
        if(counter < upperBound) {
            setCounter(counter + 1);
        }
    }

    const handleDec = () => {
        if(counter > lowerBound) {
            setCounter(counter - 1);
        }
    }

    return {
        counter,
        handleInc,
        handleDec,
    }
};

export default useCounter;