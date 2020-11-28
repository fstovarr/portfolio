import React from 'react'
import { loadableP5 as P5Wrapper } from '../sketches/lodable'
import oblique_grating from '../sketches/oblique_grating'

export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <P5Wrapper sketch={oblique_grating} />
    </div>
  )
}
