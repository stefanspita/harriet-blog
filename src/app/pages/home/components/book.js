import React from "react"
import PropTypes from "prop-types"
import styles from "./book.css"

export default function Book({openBook, pictures}) {
  return (
    <div className={styles.book}>
      <img onClick={() => openBook()} className={styles.spine} src={pictures.root} />
      <img onClick={() => openBook()} className={styles.frontCover} src={pictures.front} />
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.object.isRequired,
  openBook: PropTypes.func.isRequired,
}
