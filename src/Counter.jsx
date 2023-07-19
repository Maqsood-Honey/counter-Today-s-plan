import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Counter = (props) => {

    const formateCount = () => {
        return props.counter.value === 0 ? "zero" : props.counter.value;
    }
    return (
        <div>
            <span className={getbadge()}>{formateCount()}</span>
            <button onClick={() => props.onIncrement(props.counter)} className='btn btn-secondary btn-sm'>Increament</button>

            <button onClick={() => props.onDelete(props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
        </div>
    );

    function getbadge() {
        let classes = 'badge m-2 bg-';
        classes += (props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter