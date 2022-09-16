import { useState } from "react"



const Button=(props)=>{
  return (
    <>
    <button onClick={props.type}>{props.text}</button>
    </>
  )
}

const StatisticLine=({text,v})=>{
  return (
    <>
    <tr>
      <td>{text}</td>
      <td>{v}</td>
    </tr>
      
    </>
  )
}

const Statistics=({good,neutral,bad})=>{

  let all=good+neutral+bad
  let average=(good-bad)/all
  let positive=(good/all)*100

  if (all===0){
    return (
      <>
        No feedback given
      </>
    )
  }
  return (
    <>
      <StatisticLine text='good' v={good}/>
      <StatisticLine text='neutral' v={neutral}/>
      <StatisticLine text='bad' v={bad}/>
      <StatisticLine text='all' v={all}/>
      <StatisticLine text='average' v={average}/>
      <StatisticLine text='positive' v={positive}/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  const setToGood=()=>{
    setGood(good+1)
    
  }
  const setToNeutral=()=>setNeutral(neutral+1)
  const setToBad=()=>setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button type={setToGood} text='good'/>
      <Button type={setToNeutral} text='neutral'/>
      <Button type={setToBad} text='bad'/>
      <br></br>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      

    </div>

    
  )
}

export default App