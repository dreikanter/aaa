import React from 'react'
import ReactDOM from 'react-dom'
import styles from './style'

console.log('styles', styles)

const Hello = props => (
  <div className={styles.Sample}>Hello!</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Hello />, document.getElementById('root'))
})
