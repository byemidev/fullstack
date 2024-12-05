//Header takes care of rendering the name of the course, 
//Content renders the parts and their number of exercises and Total renders the total number 
//of exercises.

//"step by step" and console always open 

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  //Error rendering or passing props btweeen Content and Part components
  return (
    <div>
      <Part content={props.content[0]}/>
      <Part content={props.content[1]}/>
    </div>
  )
}

const Total = (props) => { //Total component
  let sum = props.content[0].exercises + props.content[1].exercises + props.content[2].exercises
  return (
    <p>Number of exercises {sum}</p>
  )
}

//TODO : Content componenet rendering on App component 
const App = () => {

  const course = 'Half Stack application development'
  const content = [
    { part: 'Fundamentals of react', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]

  return (
    <>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </>
  )
}

export default App
