import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import AboutMe from "./about-me"
import Bookshelf from "./bookshelf"
import Book from "./book"
import styles from "./home.css"

const getAndRenderBook = R.curry((books, id) => {
  return (<Book
    key={id}
    {...books[id]}
  />)
})

export default function Home({books}) {
  const renderBook = getAndRenderBook(books)
  return (
    <div className={styles.wall}>
      <Bookshelf title="Book reviews" key="1">
        {renderBook("dawn-of-the-dumb")}
        {renderBook("the-luminaries")}
      </Bookshelf>

      <Bookshelf title="Coming next" key="2">
        {renderBook("our-super-adventure")}
      </Bookshelf>

      <AboutMe />
    </div>
  )
}

Home.propTypes = {
  books: PropTypes.object.isRequired,
}
