import React from "react"
import PropTypes from "prop-types"
import styles from "./book.css"

export default function Book({bookDetails}) {
  return (
    <img className={styles.book} src={bookDetails.pictures.root} />
  )
}

Book.propTypes = {
  bookDetails: PropTypes.object.isRequired,
}
