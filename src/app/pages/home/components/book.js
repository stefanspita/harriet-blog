import React from "react"
import PropTypes from "prop-types"
import styles from "./book.css"

function getSpineStyle({spineWidth, height}) {
  return {height, width: spineWidth}
}

function getCoverStyle({coverWidth, height}) {
  const halfWidth = coverWidth / 2
  return {
    height, width: coverWidth,
    transform: `rotateY(90deg) translate3d(${halfWidth}px, 0, -${halfWidth}px)`,
  }
}

export default function Book({openBook, pictures, size}) {
  return (
    <div style={getSpineStyle(size)} className={styles.book}>
      <img onClick={() => openBook()} style={getSpineStyle(size)} className={styles.spine} src={pictures.root} />
      <img onClick={() => openBook()} style={getCoverStyle(size)} className={styles.frontCover} src={pictures.front} />
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
  openBook: PropTypes.func.isRequired,
}
