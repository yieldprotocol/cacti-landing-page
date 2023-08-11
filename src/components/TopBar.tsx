import {CSSProperties} from 'react';

const styles: { [key: string]: CSSProperties } = {
  topBar: {
    backgroundColor: 'rgba(46, 140, 135, 1)',
    color: '#fff',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    width: '100%',
    position: 'fixed',
  },
  text: {
    fontSize: '18px',
    color: 'white',
    fontWeight: 700,
  },
};

const TopBar = () => {
  return (
    <div style={styles.topBar} className="z-50">
      <span style={styles.text}>🌵CACTI🌵</span>
      <div className="flex">
          <a href="https://twitter.com/yield" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" className="mr-3 text-white" />
          </a>
          <a href="https://discord.gg/zpEGe8m7Ea" target="_blank" rel="noopener noreferrer">
            <img src="/icons/discord.svg" alt="Discord" />   
          </a>
      </div>
    </div>
  );
};

export default TopBar;
