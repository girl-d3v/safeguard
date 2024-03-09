import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import styles from './PasswordStrength.module.css'; // Import the CSS module

const PasswordStrength = () => {
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0); // Change to score to directly use the number

  const handleChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    const evaluation = zxcvbn(inputPassword);
    setScore(evaluation.score); // Update score
  };

  // Function to return a class based on the score
  const getStrengthClass = (score) => {
    switch (score) {
      case 0:
        return ''; // No class if there is no password
      case 1:
        return styles.weak;
      case 2:
        return styles.fair;
      case 3:
        return styles.good;
      case 4:
        return styles.strong;
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="password"
        className={styles.inputField}
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <div className={`${styles.strengthMeter} ${getStrengthClass(score)}`} style={{ width: `${score * 25}%` }} />
      <p className={styles.strengthText}>
        {score ? `Password Strength: ${['Weak', 'Fair', 'Good', 'Strong'][score - 1]}` : 'Enter a password to see its strength (4 characater minimum)'}
      </p>
    </div>
  );
};

export default PasswordStrength;
