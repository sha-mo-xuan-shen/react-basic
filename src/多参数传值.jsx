import React from "react"

function ListItem({item,delItem}){
    const {name,price,info,id} = item
    return(
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{info}</p>
            <button onClick={()=>delItem(id )}>删除</button>

            {/* <>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.info}</p>
            <button>删除</button>
            </> */}

        </div>
        
    )
}
class App extends React.Component{
    state={
        list:[
            {id:1,name:'欧内的手',price:10,info:'好汉'},
            {id:2,name:'尊尼获加',price:10,info:'杠精'},
            {id:3,name:'奥利安费',price:10,info:'还追'},
        ]
    }
    delItem=(id)=>{
        console.log(id)
        this.setState({
            list: this.state.list.filter(item=>item.id!==id)
        })
    }
    render(){
        return(
            <div>
                {this.state.list.map(item=><ListItem key={item.id} item={item} delItem={this.delItem} />)}
            </div>
        )
    }
}
export default App