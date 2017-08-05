import React from "react"
// import PropTypes from "prop-types"
import AboutMe from "./about-me"
import Bookshelf from "./bookshelf"
import styles from "./home.css"

export default function Home() {
  return (
    <div className={styles.wall}>
      <Bookshelf />
      <Bookshelf />
      <Bookshelf />

      <AboutMe />
    </div>
  )
}

Home.propTypes = {}
