import React from 'react'
import Radium from 'radium'

import styles from './frame-styles.js'

export default Radium(function Frame({ children }) {
  return <div style={styles.root}>{children}</div>
})
