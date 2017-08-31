import React from "react"
import PropTypes from "prop-types"
import styles from "./overlay.css"

function onClick(handler) {
  handler()
}


export default function Overlay({handler, show}) {
  let className = ""
  if (show) {
    className = styles.overlay
  }


  return (
    <div
      onClick={() => onClick(handler)}
      className={className}
    />
  )
}

Overlay.propTypes = {
  handler: PropTypes.func,
  show: PropTypes.bool,
}

Overlay.defaultProps = {
  handler: () => {},
}
