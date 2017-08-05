import React from "react"
// import PropTypes from "prop-types"
import AboutMe from "./about-me"
import styles from "./home.css"

export default function Home() {
  return (
    <div className={styles.wall}>
      <div className={styles.bookshelf}>
        <div className={styles.book}></div>
        <div className={styles.shelf}></div>
      </div>

      <AboutMe />
    </div>
  )
}

Home.propTypes = {}
