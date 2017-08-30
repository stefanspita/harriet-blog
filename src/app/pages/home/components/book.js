/* eslint-disable react/no-find-dom-node */
import React from "react"
import R from "ramda"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import styles from "./book.css"

function getBookSize({height, spineWidth}) {
  return {height, width: spineWidth}
}

// function getBookPositionAndSize(opened, animationStarted, {spineWidth, coverWidth, height}, bookPosition, screen) {
//   if (animationStarted) return {
//     top: `${screen.height / 2}px`, left: `${screen.width / 2}px`,
//     margin: `-${height / 2}px 0 0 -${coverWidth / 2 * 3 + spineWidth / 2}px`,
//   }
//   if (opened) return bookPosition
//   return {height, width: spineWidth}
// }

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
    this.state = {opened: props.open, animationStarted: false, position: {}, screen: {}}
    this.openBook = this.openBook.bind(this)
    this.updateScreenResize = this.updateScreenResize.bind(this)
  }

  updateScreenResize() {
    const element = ReactDOM.findDOMNode(this).getBoundingClientRect()
    this.setState({
      screen: {height: window.innerHeight, width: window.innerWidth},
      position: R.pick(["top", "left"], element),
    })
  }

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this).getBoundingClientRect()
    this.setState({position: R.pick(["top", "left"], element)})
    this.updateScreenResize()
    window.addEventListener("resize", this.updateScreenResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreenResize)
  }

  openBook() {
    this.setState({opened: true})
    setTimeout(() => {
      this.setState({animationStarted: true})
    }, 400)
    setTimeout(() => {
      this.props.openBook()
    }, 700)
  }

  render() {
    const {pictures, size} = this.props
    // const {opened, animationStarted, position, screen} = this.state
    const {opened} = this.state
    const bookClass = opened ? styles.openedBook : styles.book
    const rotateClass = opened ? styles.openedRotateBook : styles.rotateBook
    // const bookStyle = getBookPositionAndSize(opened, animationStarted, size, position, screen)
    const bookSize = getBookSize(size)

    return (
      <div style={bookSize} className={bookClass}>
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
    )
  }
}


Book.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
  openBook: PropTypes.func.isRequired,
  open: PropTypes.bool,
}
