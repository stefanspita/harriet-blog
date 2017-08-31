import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import Overlay from "../../../components/overlay"
import AboutMe from "./about-me"
import Bookshelf from "./bookshelf"
import Book from "./book"
import Decoration from "./decoration"
import styles from "./home.css"

const getAndRenderBook = R.curry((openBook, books, id) => {
  const book = books[id]
  return (<Book
    key={id}
    openBook={R.partial(openBook, [id])}
    {...book}
  />)
})

function renderDecoration(pictureId) {
  return (<Decoration key={pictureId} pictureId={pictureId} />)
}

export default function Home({books, openBook, closeBook, openedBook}) {
  const renderBook = getAndRenderBook(openBook, books)
  return (
    <div>
      <div className={styles.wall}>
        <Bookshelf title="Book reviews" key="1">
          {renderBook("dawn-of-the-dumb")}
          {renderBook("the-luminaries")}
          {renderBook("our-super-adventure")}
          {renderDecoration("hangingCat")}
        </Bookshelf>

        <Bookshelf title="Coming next" key="2">
          {renderDecoration("cat2")}
          {renderBook("dawn-of-the-dumb")}
          {renderBook("our-super-adventure")}
          {renderDecoration("cat1")}
        </Bookshelf>

        <Overlay show={!!openedBook} handler={() => closeBook(openedBook)} />
      </div>
      <AboutMe />
    </div>
  )
}

Home.propTypes = {
  books: PropTypes.object.isRequired,
  openBook: PropTypes.func.isRequired,
  closeBook: PropTypes.func.isRequired,
  openedBook: PropTypes.string,
}
