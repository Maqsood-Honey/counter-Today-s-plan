import React from 'react'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="">Navbar
                    <span className="badge m-1 bg-secondary badge-pill">
                        {props.totalcounters}</span></a>
            </nav>
        </div>
    )
}
export default Navbar