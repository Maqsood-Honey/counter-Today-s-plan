import React from 'react'

const ToDos = (props) => {
    return (
        <>
            {
                props.items.map((v, i) => {
                    return (
                        <React.Fragment key={i}>
                            <li className='shadow p-2 my-2 col-sm-9'>{v}</li>
                            <button onClick={() => props.onDelete(i)} className="btn btn-danger mx-1 my-2 col-sm-1">x</button>
                        </React.Fragment>
                    )


                })}
        </>
    )
}

export default ToDos