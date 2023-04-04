import React from 'react';
import style from "../Styles/TransactionComp.module.css";

const TransactionComp = ({data}) => {
  return (
    <div className={style.box}>
        <div className={style.leftBox}>
            <div>
                <img src={data.image} alt="" />
            </div>
            <div>
                <div>
                    <h2>{data.name}</h2>
                </div> 
                <div className={style.timedetails}>
                    <p>{data.date}</p>
                    <li>{data.time}</li>
                </div>    
            </div> 
        </div>
        <div className={style.rightBox}>
            <div>
                <h2 style={{color: data.transaction == "Received" ? "green" : "red"}}>{data.transaction == "Received" ? "+" : "-"}{data.money}</h2>
            </div>
            <div>
                <p>{data.transaction}</p>
            </div>
            
        </div>
    </div>
  )
}

export default TransactionComp