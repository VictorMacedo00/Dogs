import React from 'react'
import styles from './Button.module.css'

export const Button = ({title, ...props}) => {
  return (
    <button {...props} className={styles.button}>{title}</button>
  )
}
