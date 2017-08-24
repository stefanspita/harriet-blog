/* eslint-disable react/no-find-dom-node */
import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import styles from "./book.css"

function getBookPositionAndSize(opened, animationStarted, {spineWidth, coverWidth, height}, {top, left}) {
  if (animationStarted) return {
    top: "50%", left: "50%",
    margin: `-10px 0 0 -${coverWidth / 2 * 3}px`,
  }
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
    this.state = {opened: false, animationStarted: false, position: {}}
    this.openBook = this.openBook.bind(this)
  }

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this).getBoundingClientRect()
    this.setState({position: R.pick(["top", "left"], element)})
  }

  openBook() {
    this.setState({opened: true})
    setTimeout(() => {
      this.setState({animationStarted: true})
    }, 400)
  }

  render() {
    const {pictures, size} = this.props
    const {opened, animationStarted, position} = this.state
    const bookWrapperClass = opened ? styles.openedBookWrapper : styles.bookWrapper
    const bookClass = opened ? styles.openedScaleBook : styles.book
    const rotateClass = opened ? styles.openedRotateBook : null
    const bookWrapperStyle = getBookPositionAndSize(opened, animationStarted, size, position)

    return (
      <div style={bookWrapperStyle} className={bookWrapperClass}>
        <div className={bookClass}>
          <div className={rotateClass}>
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
        </div>
      </div>
    )
  }
}


Book.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
}
