/* eslint-disable react/no-find-dom-node */
import React from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import styles from "./book.css"

function getBookStyle({spineWidth, height}, opened, {top, left}) {
  if (opened) return {height, width: spineWidth, top, left}
  return {height, width: spineWidth}
}

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

export default class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {opened: false, elementPosition: {}}
    this.openBook = this.openBook.bind(this)
  }

  componentDidMount() {
    const elementPosition = ReactDOM.findDOMNode(this).getBoundingClientRect()
    this.setState({elementPosition})
  }

  openBook() {
    this.setState({opened: true})
  }

  render() {
    const {size, pictures} = this.props
    const {opened, elementPosition} = this.state
    const bookClass = opened ? styles.openedBook : styles.book
    const booksStyle = getBookStyle(size, opened, elementPosition)

    return (
      <div style={booksStyle} className={bookClass}>
        <img
          onClick={() => this.openBook()}
          style={getSpineStyle(size)}
          className={styles.spine}
          src={pictures.root}
        />
        <img
          onClick={() => this.openBook()}
          style={getCoverStyle(size)}
          className={styles.frontCover}
          src={pictures.front}
        />
      </div>
    )
  }
}


Book.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
}
