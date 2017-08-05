import React from "react"
// import PropTypes from "prop-types"
import styles from "./bookshelf.css"

export default function Bookshelf() {
  return (
    <div className={styles.bookshelf}>
      <div className={styles.books}>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
      </div>
      <div className={styles.shelf}></div>
    </div>
  )
}

Bookshelf.propTypes = {}
