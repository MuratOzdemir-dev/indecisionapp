import React from 'react'

export default function Try() {
  const [showStatus, setShowStatus] = React.useState(false);
  return (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={()=> {setShowStatus(!showStatus)}}>{showStatus ? "Hide" : "Show"} details</button>
      {showStatus && <p>Lorem ipsum dolor sit amet.</p>}
    </div>
  )
}
