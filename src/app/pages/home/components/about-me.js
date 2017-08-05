import React from "react"
// import PropTypes from "prop-types"
import aboutMeImgSrc from "./assets/goat-head.png"
import styles from "./about-me.css"

export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutMeText}>About me</div>
      <img className={styles.aboutMeImg} src={aboutMeImgSrc} />
    </div>
  )
}

AboutMe.propTypes = {}
