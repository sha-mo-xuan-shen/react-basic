import React from "react"

class TestComponet extends React.Component{
    state={
        name:'otto',
        meaning:'电棍',
        count: 1
    }
    answer=()=>{
        return <>{this.state.name}的意思就是{this.state.meaning}</>
    }
    example=()=>{
        this.setState({
            exa:'欧内的手，好汉'
        })
    }
    counter=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return <div>this is a TestComponet
            <br/>
            <div>{this.state.name}是什么意思呢</div>
            <div>{this.answer()}</div>
            <button onClick={this.example}>举个例子</button>
            <div>{this.state.exa}</div>
            <button onClick={this.counter}>{this.state.count}:点一下加一点</button>
            </div>
    }
}

function App(){

    return(
        <div>
            <TestComponet>
            </TestComponet>
        </div>
    )
}
export default App