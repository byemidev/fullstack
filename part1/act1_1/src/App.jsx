//Header takes care of rendering the name of the course, 
//Content renders the parts and their number of exercises and Total renders the total number 
//of exercises.

//"step by step" and console always open 

//Note: this project has only the 1.1 to 1.5 activities. Check act1_2 for the rest of Part 1 activities 

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => { //Total component
  console.log(props)
  let sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>Number of exercises {sum}</p>
  )
}

//TODO : Content componenet rendering on App component 
const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts : [
      { name: 'Fundamentals of react', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }
  
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App
