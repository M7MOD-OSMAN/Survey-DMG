import React, { useState } from 'react'
import Questions from './Questions'
import questions from '../questions.json'
import Results from './Results'

const Survey = () => {
  const [data, setData] = useState(questions)

  return (
    <div className='survey-container'>
      <h1>The Parker Team Player Survey</h1>
      <Questions data={data} setData={setData} />
      <Results data={data} />
    </div>
  )
}

export default Survey
