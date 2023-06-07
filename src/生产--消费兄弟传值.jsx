import React,{createContext} from "react";


const {Provider,Consumer} = createContext()
function ComA(props){
    const otto='欧内的手'
    return(
        <div>
            {otto}
            {props.sendAMsg(otto)}
        </div>
    )
}

function ComB(){
    return(
        <div>
            奥利安费
            <hr/>
            <Consumer>
                {value=><div>{value}</div>}
            </Consumer>
        </div>
    )
}
class App extends React.Component{
    state={
        msg:'好汉'
    }
    sendAMsg=(Amsg)=>{
        this.setState({
            msg: Amsg
        })
    }
    render(){
        return(
            <Provider value={this.state.msg}>
            <div>
                <ComA sendAMsg={this.sendAMsg}/>
                <ComB/>
            </div>
            </Provider>
        )
    }
}
export default App