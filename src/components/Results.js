import React, { useState } from 'react'

const Results = ({ data }) => {
  const [showResult, setShowResult] = useState(false)

  const q1 = data[0].choices
  const q2 = data[1].choices
  const q3 = data[2].choices
  const q4 = data[3].choices
  const q5 = data[4].choices
  const q6 = data[5].choices
  const q7 = data[6].choices
  const q8 = data[7].choices
  const q9 = data[8].choices
  const q10 = data[9].choices
  const q11 = data[10].choices
  const q12 = data[11].choices
  const q13 = data[12].choices
  const q14 = data[13].choices
  const q15 = data[14].choices
  const q16 = data[15].choices
  const q17 = data[16].choices
  const q18 = data[17].choices

  let contributor = 0
  contributor +=
    +q1[0].userAnswer +
    +q2[3].userAnswer +
    +q3[2].userAnswer +
    +q4[1].userAnswer +
    +q5[0].userAnswer +
    +q6[3].userAnswer +
    +q7[2].userAnswer +
    +q8[1].userAnswer +
    +q9[0].userAnswer +
    +q10[3].userAnswer +
    +q11[2].userAnswer +
    +q12[1].userAnswer +
    +q13[0].userAnswer +
    +q14[3].userAnswer +
    +q15[2].userAnswer +
    +q16[1].userAnswer +
    +q17[0].userAnswer +
    +q18[3].userAnswer

  let collaborator = 0
  collaborator +=
    +q1[1].userAnswer +
    +q2[0].userAnswer +
    +q3[3].userAnswer +
    +q4[2].userAnswer +
    +q5[1].userAnswer +
    +q6[0].userAnswer +
    +q7[3].userAnswer +
    +q8[2].userAnswer +
    +q9[1].userAnswer +
    +q10[0].userAnswer +
    +q11[3].userAnswer +
    +q12[2].userAnswer +
    +q13[1].userAnswer +
    +q14[0].userAnswer +
    +q15[3].userAnswer +
    +q16[2].userAnswer +
    +q17[1].userAnswer +
    +q18[0].userAnswer

  let communicator = 0
  communicator +=
    +q1[2].userAnswer +
    +q2[1].userAnswer +
    +q3[0].userAnswer +
    +q4[3].userAnswer +
    +q5[2].userAnswer +
    +q6[1].userAnswer +
    +q7[0].userAnswer +
    +q8[3].userAnswer +
    +q9[2].userAnswer +
    +q10[1].userAnswer +
    +q11[0].userAnswer +
    +q12[3].userAnswer +
    +q13[2].userAnswer +
    +q14[1].userAnswer +
    +q15[0].userAnswer +
    +q16[3].userAnswer +
    +q17[2].userAnswer +
    +q18[1].userAnswer

  let challenger = 0
  challenger +=
    +q1[3].userAnswer +
    +q2[2].userAnswer +
    +q3[1].userAnswer +
    +q4[0].userAnswer +
    +q5[3].userAnswer +
    +q6[2].userAnswer +
    +q7[1].userAnswer +
    +q8[0].userAnswer +
    +q9[3].userAnswer +
    +q10[2].userAnswer +
    +q11[1].userAnswer +
    +q12[0].userAnswer +
    +q13[3].userAnswer +
    +q14[2].userAnswer +
    +q15[1].userAnswer +
    +q16[0].userAnswer +
    +q17[3].userAnswer +
    +q18[2].userAnswer
  const total = contributor + collaborator + communicator + challenger

  return (
    <div className='result'>
      <div className='btn-container'>
        {!showResult && (
          <button onClick={() => setShowResult(true)}>Reveal results</button>
        )}
      </div>
      {showResult && (
        <>
          <h1 className='res-heading'>The Parker Team Player Survey Scoring</h1>
          <div className='results'>
            <h2>Survey Results</h2>
            <div className='res-categories'>
              <span className='contributor'>Contributor = {contributor}</span>
              <span>Collaborator = {collaborator}</span>
              <span>Communicator = {communicator}</span>
              <span>Challenger = {challenger}</span>
            </div>
            <h3 className='total'>Total = {total}</h3>
            <p className='res-desc'>
              The highest number designates your Primary Team Player Style. If
              your highest numbers are the same or within three points of each
              other, consider them both as your primary style. The lowest total
              indicates your Least Active Team Player Style.
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Results
