import React from 'react';
import styles from '../stylesheets/NavBar.module.css'

function NavBar(props) {

  const handleClick = () => {
    setToHome()
  };

  const {
    player,
    setToHome
  } = props

  return(
    <div className={styles.navBar}>
      <img
        onClick={handleClick}
        className={styles.icon} 
        src="../../icons/fishbowl/fishbowl_01.svg" 
        alt="fishbowl icon"
      />
      {props.player ?
        <div className={styles.playerInfo}>
          <p className={styles.name}>{player.name}</p>
          {player.team.team_name ? 
            <p className={styles.team}>
              Team {player.team.team_letter.toUpperCase()}: {player.team.team_name}
            </p> :
            <p className={styles.team}>
              Team {player.team.team_letter.toUpperCase()}
            </p>
          }
        </div> :
        null
      }
    </div>
  )
}

export default NavBar;