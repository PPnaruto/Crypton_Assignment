import React from 'react';
import Data from '../Data';
import style from "../Styles/TransactionsList.module.css";
import TransactionComp from './TransactionComp';

const TransactionsList = () => {

    console.log(Data);
    
  return (
    <div className={style.parent}>
        <div className={style.header}>
            <p>Last Transactions</p>
            <p>See All</p>
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