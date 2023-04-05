import React from 'react';
import style from "../Styles/Course.module.css";

const Course = ({name,lessons,image}) => {
  return (
    <div className={style.box}>
        <div className={style.imagebox}>
            <img src={image} alt="" />
        </div>
        <div className={style.info}>
            <h2>{name}</h2>
            <h4>{lessons} lessons</h4>
        </div>
    </div>
  )
}

export default Course;