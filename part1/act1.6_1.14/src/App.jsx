import { useState } from 'react'

//header component
const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}


//button component 
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticsLine = (props) => {
  if(props.text ==="positive") return <td>{props.text} {props.value}%</td> 
  return <td>{props.text} {props.value}</td>
}

//statistics component
const Statistics = (props) => {
 const totalGood = props.clickedGood
 const totalNeutral = props.clickedNeutral 
 const totalBad = props.clickedBad
 const totalClicks = totalGood + totalNeutral + totalBad

 let options = 
 {
  style: 'decimal', 
  maximumFractionDigits: 2
 }
 const average = (totalClicks/3).toLocaleString(undefined, options)
 const positive = ((totalGood * 100) / (totalClicks)).toLocaleString(undefined, options)

 if(totalClicks === 0) return <p>No FeedBack Given</p>

  return (
    <table>
      <tbody>
        <tr>
          <StatisticsLine text="good" value={totalGood}/>
        </tr>
        <tr>
          <StatisticsLine text="neutral" value={totalNeutral}/>
        </tr>
        <tr>
          <StatisticsLine text="bad" value={totalBad}/>
        </tr>
        <tr>
          <StatisticsLine text="all" value={totalClicks}/>
        </tr>
        <tr>
          <StatisticsLine text="average" value={average}/>
        </tr>
        <tr>
          <StatisticsLine text="positive" value={positive}/>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
 
  const txtHeader = "give feedback"
 
  // save clicks of each button to its own state
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)



const handleGoodClick = () => {
  setGood(good + 1)
}

const handleNeutralClick = () => {
  setNeutral(neutral + 1)
}

const handleBadClick = () => {
  setBad(bad + 1)
}

  return (
    <div>
      <Header text={txtHeader}/>
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text= "Neutral"/>
      <Button handleClick={handleBadClick} text="Bad"/>
      <Statistics clickedGood={good} clickedNeutral={neutral} clickedBad={bad}/>
    </div>
  )
}

export default App
