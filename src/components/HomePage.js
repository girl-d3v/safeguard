// HomePage.js

import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to SafeGuard!</h1>
      <p>Your go-to app for improving your online security.</p>
      <h2>Features:</h2>
      <ul>
        <li>Password Strength Analysis - Ensure your passwords are strong.</li>
        <li>Coming Soon: 2FA Recommendations - Learn how to enable 2FA on popular platforms.</li>
        <li>Coming Soon: Security Tips</li>
        </ul>
    </div>
  );
}

export default HomePage;

