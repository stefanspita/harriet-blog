import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import AboutMe from "./about-me"
import Bookshelf from "./bookshelf"
import Book from "./book"
import Decoration from "./decoration"
import styles from "./home.css"

const getAndRenderBook = R.curry((books, id) => {
  const book = books[id]
  return (<Book
    key={id}
    {...book}
  />)
})

function renderDecoration(pictureId) {
  return (<Decoration key={pictureId} pictureId={pictureId} />)
}

export default function Home({books}) {
  const renderBook = getAndRenderBook(books)
  return (
    <div>
      <div className={styles.wall}>
        <Bookshelf title="Book reviews" key="1">
          {renderBook("dawn-of-the-dumb")}
          {renderDecoration("hangingCat")}
          {renderBook("the-luminaries")}
          {renderBook("our-super-adventure")}
        </Bookshelf>

        <Bookshelf title="Coming next" key="2">
          {renderBook("dawn-of-the-dumb")}
          {renderBook("our-super-adventure")}
        </Bookshelf>

      </div>
      <AboutMe />
    </div>
  )
}

Home.propTypes = {
  books: PropTypes.object.isRequired,
}
