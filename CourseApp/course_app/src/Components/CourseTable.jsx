import React from 'react';
import style from "../Styles/Table.module.css";
import Data from '../Data';
import Course from './Course';
import CompletedLesson from './CompletedLesson';

const CourseTable = () => {
  return (
    <div className={style.parent}>
        <div className={style.topbox}>
           <h2>My Courses</h2>
           <h3>View All</h3>
        </div>
        <table className={style.table}>
            <thead className={style.thead}>
                <tr >
                    <th>Course Name</th>
                    <th>Start Date</th>
                    <th>Lesson Completed</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody className={style.tbody} >
                {
                    Data.map((ele)=>{
                        return <tr style={{marginTop:"20px", border:"1px solid green"}}>
                            <td> <Course name={ele.course_name} lessons={ele.lessons} image={ele.img}/> </td>
                            <td><h2 style={{fontWeight:"500"}}>{ele.start_date}</h2></td>
                            <td> <CompletedLesson lessons={ele.lessons} completedLesson={ele.lessons_Completed}/> </td>
                            <td><h2 style={{fontWeight:"500"}}>{ele.duration}</h2></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default CourseTable