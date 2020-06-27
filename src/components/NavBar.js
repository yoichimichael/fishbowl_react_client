import React from 'react';
import styles from '../stylesheets/NavBar.module.css'

function NavBar() {
  return(
    <div className={styles.navBar}>
      <img
        className={styles.icon} 
        src="../../icons/fishbowl/fishbowl_01.svg" 
        alt="fishbowl icon"
      />
    </div>
  )
}

export default NavBar;