import React from 'react'
import ebbinghaus from '../sketches/ebbinghaus'
import { loadableP5 as P5Wrapper } from '../sketches/lodable'

export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <P5Wrapper sketch={ebbinghaus} />
    </div>
  )
}
