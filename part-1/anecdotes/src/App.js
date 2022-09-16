import { useState } from 'react'


const Button=(props)=>{
  return(
    <button onClick={props.handleSelected}>{props.text}</button>
  )
}

const voteOfDay=({votes,anecdotes})=>{
  const maxVote=Math.max(votes)
  const mostVoteIndex=votes.indexOf(maxVote)

  if (maxVote===0){
    return(
      <>
        <p> no  votes yet</p>
      </>
    )
  }
  return (
    <>
    <h1>Anecdote with the most votes</h1>
    <p>{anecdotes[mostVoteIndex]} {maxVote}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,setVote]=useState(Array(anecdotes.length).fill(0))

  const handleRandom=()=>{
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const handleVote=()=>{
    const newVote=[...votes]
    newVote[selected]+=1
    setVote(newVote)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleSelected={handleVote} text='vote'/>
      <Button handleSelected={handleRandom} text='next anecdote'/>

      
      <voteOfDay votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App