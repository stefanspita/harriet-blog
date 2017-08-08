import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import AboutMe from "./about-me"
import Bookshelf from "./bookshelf"
import Book from "./book"
import styles from "./home.css"

function renderShelfSlot(shelfSlotProps, index) {
  if (shelfSlotProps.type === "book") {
    return (<Book
      key={index}
      {...shelfSlotProps}
    />)
  }
  return null
}

function renderBookshelf(shelfProps, index) {
  return (<Bookshelf
    key={index}
  >
    {R.addIndex(R.map)(renderShelfSlot, shelfProps.slots)}
  </Bookshelf>)
}

export default function Home({shelves}) {
  return (
    <div className={styles.wall}>
      {R.addIndex(R.map)(renderBookshelf, shelves)}

      <AboutMe />
    </div>
  )
}

Home.propTypes = {
  shelves: PropTypes.array.isRequired,
}
