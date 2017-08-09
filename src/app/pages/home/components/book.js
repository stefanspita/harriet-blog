import React from "react"
import PropTypes from "prop-types"
import styles from "./book.css"

export default function Book({pictures}) {
  return (
    <img className={styles.book} src={pictures.root} />
  )
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  pictures: PropTypes.object.isRequired,
}
