/* eslint-disable react/no-find-dom-node */
import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import styles from "./book.css"

function getBookPositionAndSize(opened, {spineWidth, height}, {top, left}) {
  if (opened) return {top, left}
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
    this.state = {opened: false, position: {}}
    this.openBook = this.openBook.bind(this)
  }

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this).getBoundingClientRect()
    this.setState({position: R.pick(["top", "left"], element)})
  }

  openBook() {
    const position = ReactDOM.findDOMNode(this).getBoundingClientRect()
    this.setState({
      opened: true,
      position,
    })
  }

  render() {
    const {pictures, size} = this.props
    const {opened, position} = this.state
    const bookClass = opened ? styles.openedBook : styles.book

    return (
      <div style={getBookPositionAndSize(opened, size, position)} className={bookClass}>
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
