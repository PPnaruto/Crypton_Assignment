import React from 'react';
import {useState, useEffect} from "react";
import OrderStat from './OrderStat';
import style from "../Styles/App.module.css";

const WidgetOrderStats = () => {
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
    <div  className={style.app}>
        {/* <h1>Crypton Assignment</h1> */}
      {
        data.map((ele,i)=>{
          return <OrderStat obj={ele} key ={i}/>
        })
      }
    </div>
  )
}

export default WidgetOrderStats