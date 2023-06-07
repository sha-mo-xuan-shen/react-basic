import React from "react";


function SonA(props){
    // const aMsg = '来自A的数据'
    return(
        <div>this is A{props.sendMsg}
        </div>
    )
}
function SonB(props){
    const bMsg = '来自B的数据'
    return(
        <div>this is B
            <button onClick={()=>props.getBMsg(bMsg)}>
                按钮B
            </button>
        </div>
    )
}

class App extends React.Component{
    state={
        sendMsg:'来自组件的数据'
    }
    getBMsg = (msg)=>{
        console.log(msg)
        this.setState({
            sendMsg: msg
        })
    }
    render(){
        return(
            <>
            <SonA sendMsg={this.state.sendMsg}/>
            <SonB getBMsg={this.getBMsg} />
            </>
    )
}
}
export default App