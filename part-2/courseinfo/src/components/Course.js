import React from 'react'


const Course = ({course}) => {
    const disp=course.map(courses=>
        <>
        <h1 key={courses.id}>{courses.name}</h1>
        <p>{courses.parts.map(part=>
            <p key={part.id}>{part.name} {part.exercises}</p>
        )}</p>
        <h3>Total of {courses.parts.reduce((s,part)=>s+part.exercises,0)} exercises</h3>
        </>
        )
    
    
    return(
        <>
            {disp}
        </>
      )
  }

export default Course