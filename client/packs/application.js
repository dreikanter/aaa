import React from 'react'
import ReactDOM from 'react-dom'
import styles from './style'

const Hello = props => (
  <div className={styles.Sample}>Hello!</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Hello />, document.getElementById('root'))
})
