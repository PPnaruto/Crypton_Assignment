import './App.css';
import {useState, useEffect} from "react";
import WidgetOrderStats from './Components/WidgetOrderStats';

function App() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/OrderStats")
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      setData(res);
    });
  },[]);
  return (
    <div className="App">
      <h1>Crypton Assignment</h1>
      {
        data.map((ele,i)=>{
          return <WidgetOrderStats obj={ele} key ={i}/>
        })
      }
    </div>
  );
}

export default App;
