import React, { useState } from 'react'

const Contributor = () => {
  const input = () => {
    return <input type='number' max={4} min={1} name='' />
  }
  const ffour = () => {
    return (
      <div className='q'>
        <span>a</span>
        {input}
        <span>d</span>
        {input}
        <span>c</span>
        {input}
        <span>b</span>
        {input}
      </div>
    )
  }
  return { ffour }, { ffour }, { ffour }, { ffour }
}

export default Contributor
