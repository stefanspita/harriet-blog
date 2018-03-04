import React from "react"
import PropTypes from "prop-types"
import decorations from "../../../decorations"
import styles from "./decoration.css"

export default function Decoration({pictureId}) {
  return (
    <img
      className={`${styles.decoration} ${styles[pictureId]}`}
      src={decorations[pictureId]}
    />
  )
}

Decoration.propTypes = {
  pictureId: PropTypes.string.isRequired,
}
