import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import AboutMe from "./about-me"
import Bookshelf from "./bookshelf"
import styles from "./home.css"

function renderBookshelf(shelfProps, index) {
  return (<Bookshelf
    key={index}
    {...shelfProps}
  />)
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
