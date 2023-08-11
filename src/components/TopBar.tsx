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
    fontSize: '14px',
    color: 'white',
    fontWeight: 700,
  },
};

const TopBar = () => {
  return (
    <div style={styles.topBar}>
      <span style={styles.text}>Cacti🌵</span>
      <div className="flex">
          <img src="/icons/twitter.svg" alt="Twitter" className="mr-3 text-white" />
          <img src="/icons/discord.svg" alt="Discord" />   
      </div>
    </div>
  );
};

export default TopBar;
