function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}
function Part(props) {
  let part = props.part
  return (
    <p>{part.name} {part.exercises}</p>
  )
}
function Content(props) {
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  )
}
function Total(props) {
  let total = 0
  props.total.forEach(value => {
    total += value.exercises
  })

  return (
    <p>Number of exercises {total}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total total={course.parts} />
      </div>
    </>
  )
}

export default App
