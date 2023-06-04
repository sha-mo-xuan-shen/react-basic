//1.识别常规的变量
//2.原生js方法调用
const otto='电棍'
const getName = ()=>{
  return '欧内的手好汉'
}
const flag = 0
const songs = [
  {id:1,name:'欧内的手'},
  {id:2,name:'奥丽安费'},
  {id:3,name:'尊尼获加'},
]
function App() {
  return (
    <div className="App">
      { otto }
      <br></br>
      { getName() }
      <br></br>
      { flag ? '可以的':'铸币吧'}
      <br></br>
      <ul>
        {songs.map(song=> <li key={song.id}>{song.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
