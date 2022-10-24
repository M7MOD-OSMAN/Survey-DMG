import Select from './Select'

const Question = ({ data, setData }) => {
  // console.log(parseInt(q1[0].userAnswer))
  // data[question.id -1].choices[idx].userAnswer

  return (
    <div className='q-cont'>
      {data.length > 0 &&
        data.map((question, qid) => {
          return (
            <>
              <div className='question' key={question.id}>
                <h3>{question.question}</h3>
                <ul>
                  {question?.choices?.map((choice, idx) => {
                    return (
                      <li key={idx}>
                        <Select
                          qid={qid}
                          cId={choice.idx}
                          idx={idx}
                          userAnswer={choice.userAnswer}
                          setData={setData}
                          data={data}
                        />
                        <div>
                          <span className='q-idx'>{choice.idx} - </span>
                          <span className='q-instance'>{choice.choice}</span>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </>
          )
        })}
    </div>
  )
}

export default Question
