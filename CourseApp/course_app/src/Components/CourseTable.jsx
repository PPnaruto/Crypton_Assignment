import React from 'react';
import style from "../Styles/Table.module.css";

const CourseTable = () => {
  return (
    <div className={style.parent}>
        <div>
           <h1>My Courses</h1>
           <h2>View All</h2>
        </div>
        <table className={style.table}>
            <tbody className={style.tbody}>
                <tr>
                    <th>Course Name</th>
                    <th>Start Date</th>
                    <th>Lesson Completed</th>
                    <th>Duration</th>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>30 May</td>
                    <td>10/10</td>
                    <td>12 hrs</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default CourseTable