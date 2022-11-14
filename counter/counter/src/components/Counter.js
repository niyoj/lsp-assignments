import "./counter.css";
import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(1);

    return (
        <div className="counter__wrapper">
            <div className="counter__increment" onClick={() => setCount(count+1)}>+</div>
            <div className="counter__content">{count}</div>
            <div className="counter__decrement" onClick={() => setCount(count-1)}>-</div>
        </div>
    );
};

export default Counter;