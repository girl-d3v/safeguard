// NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css'; // Import the CSS module

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/password-strength" className={styles.navLink}>Password Strength Analysis</Link>
      <Link to="/2fa-recommendations" className={styles.navLink}>2FA Recommendations</Link>
    </nav>
  );
};

export default NavigationBar;
