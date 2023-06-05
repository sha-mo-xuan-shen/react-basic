import './App.css';
import React from 'react';
//1.识别常规的变量
//2.原生js方法调用
const otto = "电棍";
const getName = () => {
    return "欧内的手好汉";
};
const flag = 1;
const songs = [
    {id: 1,name: "欧内的手"},
    {id: 2,name: "奥丽安费"},
    {id: 3,name: "尊尼获加"},
];
const getHtag = (type) => {
    if (type === 1) {
        return <h1>小标签</h1>
    } else if (type === 2) {
        return <h2>中标签</h2>
    } else if (type === 3) {
        return <h3>大标签</h3>
    }
}
// const style = {
//     color:'#c60',
//     fontSize:'30px'
// }
function clickLog(){
    console.log("奥利安费")
}
function Hello(){
    return <div onClick={clickLog}>哎呀米诺</div>
}
class HelloCompoment extends React.Component{
    clickLog=(msg)=>{
        console.log("别追了",msg)
    }
    render(){
        return <div onClick={this.clickLog}><a href='http://www.baidu.com'>百度</a>this is a class Component</div>
    }
}
function App() {
    return (
    <div className="App">
        {otto}
        <br></br>
        {getName()}
        <br></br>
        {flag ? "可以的" : "铸币吧"}
        <br></br>
        <ul>
            {songs.map((song) => (
            <li key={song.id}> {song.name} </li>
            ))}1
        </ul>
        {flag ? (
            <div>
                    <span className={1 && 'active'}> 欧西给 </span>
            </div>
            ) : null}
            {true && <span>这是个标签</span>}
            {getHtag(3)}
            {Hello()}
            <Hello></Hello>
            <HelloCompoment/>
    </div>
    );
}

export default App;
