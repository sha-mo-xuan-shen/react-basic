import React from "react";

function Son(props){
    // const {getSonMsg} = props
    return(
        <div> this is som
            <button onClick={()=>props.getSonMsg('来自子组件的数据')}>欧内的手
            </button> 
        </div>
    )
}

class App extends React.Component{
    
    state={
        list:[1,2,3]
    }
    getSonMsg=(sonMsg)=>{
        console.log(sonMsg)
    }
    render(){
        return (
            <div>
                <Son getSonMsg={this.getSonMsg}/>
            </div>
        )
    }
}
export default App