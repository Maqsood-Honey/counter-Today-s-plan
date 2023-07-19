import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Counters from './Counters'


const CounterApp = () => {
    let [count, setCount] = useState([
        { id: 0, value: 4 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 }])


    const handleDelete = (counterId) => {
        const counters = count.filter(c => c.id !== counterId)
        setCount(counters);
    }

    const handleIncrement = counter => {
        const counters = [...count];
        const index = count.indexOf(counter);
        counters[index] = { ...counter }
        counters[index].value++;
        setCount(counters);
    }
    const handleReset = () => {
        const counters = count.map(c => {
            c.value = 0;
            return c;
        });
        setCount(counters)
    }
    return (
        <>
            <Navbar totalcounters={count.filter(c => c.value > 0).length} />
            <main className="container">
                <Counters
                    counter={count}
                    onReset={handleReset}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                />
            </main>

        </>
    )
}
export default CounterApp;