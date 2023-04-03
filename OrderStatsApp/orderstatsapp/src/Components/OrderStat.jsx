import React from 'react';
import { FiArrowUp,FiArrowDown } from "react-icons/fi";
import style from "../Styles/Widget.module.css";


const OrderStat = ({obj}) => {
  return (
    <div className={style.parent}>
        <div className={style.topbox}>
            <h2>{obj.stats}</h2>
            <div style={{color: obj.growth == "increment" ? "green" : "red"}}>
                {
                    obj.growth == "increment" ? <FiArrowUp/> : <FiArrowDown/>
                }
                {obj.percentValue}
            </div>
        </div>
        <div className={style.bottombox}>
            <div>
                <img src={obj.logo} alt="" />
            </div>
            <div>
                <h1>{obj.value}</h1>
            </div>
        </div>
    </div>
  )
}

export default OrderStat;