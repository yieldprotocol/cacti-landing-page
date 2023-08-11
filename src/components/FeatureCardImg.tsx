

interface CardProps {
  header: string;
  subHeader: string;
  imagePath: string;
}

const styles = {
  card: {
    width: '60%', // Use percentage value to make it responsive
    height: 'auto', // Allow the height to adjust based on content
    borderRadius: '16px',
    backgroundColor: 'rgba(3, 16, 22, 1)',
    border: '1px solid rgba(46, 140, 135, 1)',
    padding: '32px',
  },
  img: {
    borderRadius: '8px',
    width: '50%', // Use percentage value to make it responsive
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
    <div className="rounded-lg shadow-md flex justify-center text-left mx-auto my-5" style={styles.card}>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold" style={styles.text.header}>
          {header}
        </h2>
        <p className="text-gray-600" style={styles.text.subHeader}>
          {subHeader}
        </p>
      </div>
      <img src={imagePath} alt="Card Image" className="mt-4" style={styles.img} />
    </div>
  );
};

export default Card;
