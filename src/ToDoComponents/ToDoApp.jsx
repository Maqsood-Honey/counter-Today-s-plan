import React, { Component } from 'react'
import Todos from './ToDos'
import './ToDoApp.css'
class ToDoApp extends Component {
    state = {
        items: [], text: ""
    }
    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }
    handleAdd = () => {
        if (this.state.text !== "") {
            const items = [...this.state.items, this.state.text]
            this.setState({ items: items, text: "" })

        }
    }
    handleDelete = (id) => {
        //const olditems = [...this.state.items]
        // console.log(this.state.items)
        // const items = this.state.items.filter((e, i) => i !== id)
        //   const items = olditems.filter((element, i) => { return i !== id })
        this.setState({ items: this.state.items.filter((e, i) => i !== id) })
    }

    render() {
        return (
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-sm-6 mx-auto text-white shadow-lg p-3" >
                        <h2 className='text-center'>Today's Plans</h2>
                        <div className="row">
                            <div className="col-9">
                                <input onChange={this.handleChange} type="text" value={this.state.text} placeholder='Write here...' className="form-control" />
                            </div>
                            <div className="col-2">
                                <button onClick={this.handleAdd} className="btn btn-warning font-weight-bold">Add</button>
                            </div>
                            <div className="container-fluid">
                                <ul className='row m-3'>
                                    <Todos onDelete={this.handleDelete} items={this.state.items} />

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default ToDoApp;