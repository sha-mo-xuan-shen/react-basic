import React from "react";

function Son(props){

    // console.log(props)
    return (
        <div>函数子组件,
            {props.list.map(item=>
            <div key={item}>
            {item}
            </div>
            )}
            {props.userInfo.name}
            {/* {props.getMes} */}
            <button onClick={props.getMes}>获取</button>
            {props.child}
        </div>

    )
}

class App extends React.Component{
    state={
        list:[1,2,3],
        userInfo:{
            name:'田所',
            age:'24'
        }
    }
    getMes=()=>{
        console.log('父组件中的函数')
    }
    render(){
        return(
            <div>
                <Son
                    list={this.state.list} 
                    userInfo={this.state.userInfo}
                    getMes={this.getMes}
                    child={<span>this is a span</span>} />
            </div>
        )
    }

}
export default App