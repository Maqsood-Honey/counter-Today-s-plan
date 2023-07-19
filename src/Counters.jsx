import React from 'react'
import { useState } from 'react'
import Counter from './Counter'
export const Counters = (props) => {

    return (
        <div>
            <button onClick={props.onReset} className="btn btn-danger m-2 btn-sm">Reset</button>
            {props.counter.map(obj => <Counter
                onDelete={props.onDelete}
                onIncrement={props.onIncrement}
                key={obj.id}
                value={obj.value}
                counter={obj} />)}
        </div>

    )
}
export default Counters;