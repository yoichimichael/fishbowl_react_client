import React from 'react';
import styles from '../stylesheets/NavBar.module.css'

function NavBar() {
  return(
    <div className={styles.navBar}>
      <img
        styles={styles.icon} 
        src="../../icons/fishbowl/fishbowl_01.svg" 
        alt="fishbowl icon"
      />
      <p>NavBar</p>
    </div>
  )
}

export default NavBar;