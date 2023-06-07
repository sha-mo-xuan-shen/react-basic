import React from "react"



function SonF(props){
    return (
    <div>函数子组件,{props.msg}</div>
    )
}
class SonC extends React.Component{
    render(){
        return (
        <div>类子组件,{this.props.msg}</div>
        )
    }
}
class App extends React.Component{
    state={
        message:'这是一条message'
    }
    render(){
        return(
         <div>
            <SonF msg={this.state.message}/>
            <SonC msg={this.state.message}/>
        </div>
        )
    }
}
export default App 