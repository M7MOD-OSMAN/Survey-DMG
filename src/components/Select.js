import React, { useState } from 'react'

const Select = ({ userAnswer, cId, qid, setData, data, idx }) => {
  const options = [
    { value: 'Choose' },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ]

  const [selected, setSelected] = useState(options[0].value)
  // data[question.id -1].choices[idx].userAnswer

  const handleChange = (e) => {
    setSelected(e.target.value)
    let tempData = [...data]
    tempData[qid].choices[idx].userAnswer = e.target.value
    setData(tempData)
    console.log(
      qid + 1,
      tempData[qid].choices[idx].idx,
      parseInt(tempData[qid].choices[idx].userAnswer)
    )
  }

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        {options.map((option, id) => (
          <option key={id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
