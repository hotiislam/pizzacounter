import React,{Component} from 'react'
import pizza from './pizza.webp'

const Counter={
    fontSize:"82px",
    backgroundColor:"black",
    borderRadius:"20px"
}
const Button={
    fontSize:"28px",
    pading:"10px",
    backgroundColor:"white",
    borderRadius:"10px"
}
class Pizza extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            count:0
        }
    }

    takeOrder(){
        this.setState({
            count:this.state.count + 1
        })
    }

    cancelOrder(){
        this.setState({
            count:this.state.count - 1
        })
    }

    render() {
        return <div>
            <img src={pizza} width="200" />
            <h1>Pizza Order Counter</h1>
            <h1 style={Counter}>{this.state.count}</h1>
            <button style={Button} onClick={() => this.takeOrder()}>Take order</button>
            <br />
            <br />
            <button style={Button} onClick={() => this.cancelOrder()}>Cancel order</button>
        </div>
    }
}

export default Pizza;