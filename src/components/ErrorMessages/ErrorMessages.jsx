import React from 'react';

import styles from './ErrorMessages.module.scss';

function ErrorMessages({
  messages,
}) {
  return (
    <div className={styles.root}>
      {messages.map((message, index) => <div key={index}>{message}</div>)}
    </div>
  );
}

export default ErrorMessages;
