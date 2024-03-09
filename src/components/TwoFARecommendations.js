import React from 'react';
import styles from './TwoFARecommendations.module.css';

const TwoFARecommendations = () => {
  return (
    <div className={styles.container}>
      <h1>2FA Recommendations</h1>
      <p>Two-factor authentication (2FA) adds an extra layer of security to your online accounts by requiring a second form of verification in addition to your password. Enabling 2FA can significantly reduce the risk of unauthorized access.</p>
      <h2>How to Enable 2FA on Popular Services:</h2>
      <ul>
        <li>Service 1 - <a href="https://example.com" target="_blank" rel="noopener noreferrer">Guide</a></li>
        <li>Service 2 - <a href="https://example.com" target="_blank" rel="noopener noreferrer">Guide</a></li>
        {/* Add more services and their guides here */}
      </ul>
    </div>
  );
};

export default TwoFARecommendations;