import React from 'react';
import Data from '../Data';
import style from "../Styles/TransactionsList.module.css";
import TransactionComp from './TransactionComp';

const TransactionsList = () => {
    
  return (
    <div className={style.parent}>
        <div className={style.header}>
            <p>Last Transactions</p>
            <p style={{color:"gray"}}>See All</p>
        </div>
        <div>
            {
                Data.map((ele)=>{
                    return <TransactionComp data={ele}/>
                })
            }
        </div>
    </div>
  )
}

export default TransactionsList