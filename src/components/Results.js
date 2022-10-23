import React from 'react'

const Results = () => {
  const input = () => {
    return <input type='number' max={4} min={1} name='' />
  }
  return (
    <div>
      <h6>
        Transfer your answers for questions 1 through 18 to the appropriate box
        below.
      </h6>
      <p>
        Be careful when recording the numbers. The order of the letters change
        for each question. For example, question #1 the order is a, b, c, d but
        for question #2 the order is d, a, b, c.
      </p>

      <div className='q-numbers'>
        <div className='q'>
          <span>1</span>
          <span>a</span>
          {input()}
          <span>b</span>
          {input()}
          <span>c</span>
          {input()}
          <span>d</span>
          {input()}
        </div>
      </div>
    </div>
  )
}

export default Results
