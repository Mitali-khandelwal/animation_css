import React from 'react'
import './cubePerspective.css'
const CubePerspective = () => {
  return (
    <div><div class="scene">
    <div class="cube">
      <div class="cube__face cube__face--front">front</div>
      <div class="cube__face cube__face--back">back</div>
      <div class="cube__face cube__face--right">right</div>
      <div class="cube__face cube__face--left">left</div>
      <div class="cube__face cube__face--top">top</div>
      <div class="cube__face cube__face--bottom">bottom</div>
    </div>
  </div></div>
  )
}

export default CubePerspective