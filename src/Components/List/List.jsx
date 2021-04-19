import React, { Component } from 'react';
import "./List.css";

class List extends Component {
    constructor(props){
        super(props);
        this.state={
            list:this.props.list
        }
    }
    displayList=(type="all")=>{
        let array=[]
        if(type==="all")
        array=this.props.list.filter(trip=>{
            return trip
        })
        else{
            array=this.props.list.filter(trip=>{
                return trip[2]===type
            })
        }
        this.setState({
            list:array
        })
    }
    render() {
        return (
            <div id="list">
                <h1>All trips</h1>
                <table>
                    <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                    {this.state.list.map((trip,index)=>{
                        return <tr key={index}>
                            <td>{trip[0]}</td>
                            <td>{trip[1]}</td>
                            <td>{trip[2]}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <form action="">
                    <label htmlFor="">Filter By:</label>
                    <input type="radio" name="filter" id="" onChange={()=>this.displayList("trek")}/>Trek
                    <input type="radio" name="filter" id="" onChange={()=>this.displayList("tropic")}/>Tropic
                    <input type="radio" name="filter" id="" onChange={()=>this.displayList("club")}/>Club
                    <input type="radio" name="filter" id="" onChange={()=>this.displayList("all")}/>All
                </form>
            </div>
        );
    }
}

export default List;