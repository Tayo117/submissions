import { useState } from 'react'

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return (
      <>
        <tbody>
          <tr>
            <td>No feedback given</td>
          </tr>
        </tbody>
      </>
    )
  }
  return (
    <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={(good - bad) / all} />
      <StatisticLine text="positive" value={good / all * 100 + ' %'} />
    </tbody>
  )
}

const Button = ({ func, state, text, all }) => (
  console.log(all[1]),
  <button onClick={() => {
    func(state + 1), all.set(all.value + 1)
  }}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const allWrapper = {
    value: all,
    set: setAll
  }
  console.log(allWrapper)

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button func={setGood} state={good} text="Good" all={allWrapper} />
        <Button func={setNeutral} state={neutral} text="Neutral" all={allWrapper} />
        <Button func={setBad} state={bad} text="Bad" all={allWrapper} />
      </div>
      <h1>statistics</h1>
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      </table>
    </>
  )
}

export default App
