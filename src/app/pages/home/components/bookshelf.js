import React from "react"
import R from "ramda"
// import PropTypes from "prop-types"
import styles from "./bookshelf.css"
import Book from "./book"
import books from "../../../data/books"

function renderBook(props) {
  return (<Book
    {...props}
  />)
}

export default function Bookshelf() {
  return (
    <div className={styles.bookshelf}>
      <div className={styles.books}>
        {R.map(renderBook, books)}
      </div>
      <div className={styles.shelf}></div>
    </div>
  )
}

Bookshelf.propTypes = {}
