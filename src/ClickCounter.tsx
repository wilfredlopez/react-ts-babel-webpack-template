import { useState } from 'react'

export const ClickCounter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button className="btn" onClick={() => setCounter((c) => c + 1)}>
        Count {counter}
      </button>
    </div>
  )
}
