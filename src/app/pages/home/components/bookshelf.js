import React from "react"
import PropTypes from "prop-types"
import styles from "./bookshelf.css"

export default function Bookshelf({children}) {
  return (
    <div className={styles.bookshelf}>
      <div className={styles.books}>
        {children}
      </div>
      <div className={styles.shelf}></div>
    </div>
  )
}

Bookshelf.propTypes = {
  children: PropTypes.array,
}
