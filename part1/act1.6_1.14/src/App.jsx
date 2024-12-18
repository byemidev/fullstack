import { useState } from 'react'

//header component
const Header = () => {
  return (
    <>
      <h1>give feedback</h1>
    </>
  )
}


//button component 
const Button = (props) => {
  const handleButton = () =>{
    console.log("pulsando", props.name)
  }
  return(

    <button onClick={handleButton}> {props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header/>
      <Button name="btn1" text="good"/>
      <Button name="btn2" text="neutral"/>
      <Button name="btn3" text="bad"/>
    </div>
  )
}

export default App
