import React from "react"

class Test extends React.Component{

    state={
        count:1,
        list:[1,2,3],
        person:{
            name:'田所',
            age:24,
        },
    }
    // constructor(){
    //     super()
    //     this.handler=this.handler.bind(this)
    // }

    handler=()=>{
        console.log(this)
    }
    setCount=()=>{
        this.setState({
            count:this.state.count+1
    })
    }
    clickHandler=()=>{
        this.setState({
            list: [...this.state.list,this.state.list.length+1]
        })
        this.setState({
            person:{
                ...this.state.person,
                name:'浩二',
                age:'未知'
            }
        })
        this.setState({
            list: this.state.list.filter(item=>item!==2)
        })
    }
    render(){
        return(
        <>
        <div>姓名是{this.state.person.name}</div>
        <div>年龄是{this.state.person.age}岁</div>
        <button onClick={this.handler}>click</button>
        <button onClick={this.setCount}>当前值:{this.state.count}</button>
        <button onClick={this.clickHandler}>+</button>
        <ul>
            {this.state.list.map((item)=>
            <li key={item}>{item}</li>)}
        </ul>
        </>
        )
    }
}
function App(){
    return(    
    <div>
        <Test></Test>
    </div>
)
}
export default App