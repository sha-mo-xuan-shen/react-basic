import React from "react"

class Counter extends React.Component{

    state={
        message:'这是个没用的message',

    }
    inputChange=(e)=>{
        console.log('哪里不会点哪里',e)
        this.setState({
            message:e.target.value
    })
    }
    render(){
        return(
            <div>
            欧内的手，好汉
            <br/>
            <input type="text" 
            value={this.state.message}
            onChange={this.inputChange}></input>
            </div>
        )
    }
}

function App(){
    return(
        <div>
            <Counter/>
        </div>
    )
}
export default App