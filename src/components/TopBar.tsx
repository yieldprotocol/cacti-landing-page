import React from 'react';

const TopBar = () => {
  return (
    <div style={styles.topBar}>
      <span style={styles.text}>Build with us in public.</span>
      <span style={styles.text}>Early Access to our Alpha Product Available for Developers</span>
      <span style={styles.text}>Build with us in public.</span>
    </div>
  );
};

const styles = {
  topBar: {
    background: 'linear-gradient(270deg, #2E8C87 0%, #D3E8BA 53.13%, #2E8C87 100%)',
    color: '#fff',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 20px',
    width: '100%',
  },
  text: {
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.80)',
  },
};

export default TopBar;
