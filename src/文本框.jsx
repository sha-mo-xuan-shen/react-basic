import React, { createRef } from "react";

class Input extends React.Component{
    msgRef = createRef()
    getValue=()=>{
        console.log(this.msgRef.current)
        console.log(this.msgRef.current.value)
    }
    render(){
        return(
            <div>
                <input
                type="text"
                ref={this.msgRef}
                />
                <button onClick={this.getValue}>获取输入框的值</button>
            </div>
        )}
}
function App(){
    return(
        <>
        <div/>
        <Input/>
        </>
    )
}
export default App