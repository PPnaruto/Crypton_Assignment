import React from 'react'

const CompletedLesson = ({lessons,completedLesson}) => {
    const ans = Math.floor((completedLesson/lessons) * 100)
  return (
    <div>
        <h2 style={{fontWeight:"500"}}>{completedLesson}<span style={{color:"gray"}}>/{lessons}</span> ({ans}%)</h2>
    </div>
  )
}

export default CompletedLesson