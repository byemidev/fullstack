//Header takes care of rendering the name of the course, 
//Content renders the parts and their number of exercises and Total renders the total number 
//of exercises.

//"step by step" and console always open 

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}


const Content = () => {
  return [
    {part: 'Fundamentals of React', exercises : 10}, 
    {part: 'Using props to pass data', exercises : 7},
    {part: 'State of a component' , exercises : 14}
  ]
}

const Total = (props) => { //uaing props into a component 
  //TODO: return ()
  //sum props return a total of {Content.exercises}
}

//TODO : Content componenet rendering on App component 
const App = () => {
  
  return (
    <>
      <div>
        <Header/>
        
      </div>
    </>
  )
}

export default App
