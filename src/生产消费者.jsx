import React,{createContext} from "react"

const { Provider,Consumer } = createContext()

function ComA(){
    return (
        <div>
            this is ComA
            <ComC/>
        </div>
    )
}
function ComC (){
    return (
        <div>this is ComC
            <Consumer>
                {value=><span>{value}</span>}  
            </Consumer>
        </div>
    )
}
class App extends React.Component{
    state={
        message:'欧内的手，好汉'
    }
    render(){
        return(
            <Provider value={this.state.message}>
            <div>
                <ComA/>
            </div>
            </Provider>
        )
    }
}
export default App