

interface CardProps {
  header: string;
  subHeader: string;
  imagePath: string;
}

const styles = {
  card: {
    width: '100%', // Use percentage value to make it responsive
    height: 'auto', // Allow the height to adjust based on content
    borderRadius: '16px',
    backgroundColor: 'rgba(3, 16, 22, 1)',
    border: '1px solid rgba(46, 140, 135, 1)',
    padding: '32px',
  },
  img: {
    borderRadius: '8px',
    width: '100%', // Use percentage value to make it responsive
    height: 'auto', // Allow the height to adjust based on the width
  },
  text: {
    header: {
      fontSize: '28px',
      fontWeight: '500',
    },
    subHeader: {
      fontSize: '14px',
      fontWeight: '400',
    },
  },
};

const Card = ({ header, subHeader, imagePath }: CardProps) => {
  return (
    <div className="w-full max-w-md rounded-lg shadow-md flex flex-col justify-center text-left mx-3" style={styles.card}>
      <h2 className="text-xl font-bold" style={styles.text.header}>
        {header}
      </h2>
      <p className="text-gray-600" style={styles.text.subHeader}>
        {subHeader}
      </p>
      <img src={imagePath} alt="Card Image" className="mt-4" style={styles.img} />
    </div>
  );
};

export default Card;
