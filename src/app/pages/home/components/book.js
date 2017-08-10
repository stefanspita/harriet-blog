import React from "react"
import PropTypes from "prop-types"
import styles from "./book.css"

export default function Book({pictures}) {
  return (
    <span className={styles.bookWrapper}>
      <span className={styles.spine}>
        <img className={styles.book} src={pictures.root} />
      </span>
      <span className={styles.cover}>
        
      </span>
    </span>
  )
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pictures: PropTypes.object.isRequired,
}
