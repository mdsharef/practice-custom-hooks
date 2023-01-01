// import { useState } from "react";
import useCounter from "./hooks/useCounter";

// const CounterComponent = ({counter, handleDec, handleInc}) => {
//     return (
//         <div>
//             <button onClick={handleDec}>-</button>
//             <span>{counter}</span>
//             <button onClick={handleInc}>+</button>
//         </div>
//     )
// }

const CounterComponent = (props) => {
    const {counter, handleDec, handleInc} = useCounter({...props});
    return (
        <div>
            <button onClick={handleDec}>-</button>
            <span>{counter}</span>
            <button onClick={handleInc}>+</button>
        </div>
    )
}

const App = () => {
    // const [counter1, setCounter1] = useState(0);
    // const [counter2, setCounter2] = useState(0);
    // const [counter3, setCounter3] = useState(0);

    // const handleCounterInc1 = ()=> {
    //     if(counter1 < 10) {
    //         setCounter1(counter1 + 1);
    //     }
    // }

    // const handleCounterDec1 = ()=> {
    //     if(counter1 > 0) {
    //         setCounter1(counter1 - 1);
    //     }
    // }

    // const handleCounterInc2 = ()=> {
    //     if(counter2 < 10) {
    //         setCounter2(counter2 + 1);
    //     }
    // }

    // const handleCounterDec2 = ()=> {
    //     if(counter2 > 0) {
    //         setCounter2(counter2 - 1);
    //     }
    // }

    // const handleCounterInc3 = ()=> {
    //     if(counter3 < 10) {
    //         setCounter3(counter3 + 1);
    //     }
    // }

    // const handleCounterDec3 = ()=> {
    //     if(counter3 > 0) {
    //         setCounter3(counter3 - 1);
    //
    // }

    // const {counter: counter1, handleInc: handleInc1, handleDec: handleDec1} = useCounter({});
    // const {counter: counter2, handleInc: handleInc2, handleDec: handleDec2} = useCounter({initial: 5});
    // const counter3 = useCounter({upperBound: 5, lowerBound: -10});

    return (
        <div>
            <CounterComponent />
            <CounterComponent 
                initial={5}
                upperBound={15}
            />
            <CounterComponent 
                initial={5}
                upperBound={5}
                lowerBound={-10}
            />
        </div>
    )
}

export default App;