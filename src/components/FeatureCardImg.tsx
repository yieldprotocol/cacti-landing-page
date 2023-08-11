

interface CardProps {
  header: string;
  subHeader: string;
  imagePath: string;
}

const styles = {
  card: {
    height: 'auto', // Allow the height to adjust based on content
    borderRadius: '16px',
    backgroundColor: 'rgba(3, 16, 22, 1)',
    border: '1px solid rgba(46, 140, 135, 1)',
    padding: '32px',
  },
  img: {
    borderRadius: '8px',
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
    <div className="rounded-lg shadow-md flex flex-col md:flex-row justify-center text-left mx-auto my-5 w-5/6" style={styles.card}>
      <div className="flex flex-col w-full md:w-2/4 text-center md:text-left my-0 md:my-auto">
        <h2 className="text-xl font-bold mt-0 mb-0" style={styles.text.header}>
          {header}
        </h2>
        <p className="text-gray-600 mt-3" style={styles.text.subHeader}>
          {subHeader}
        </p>
      </div>
      <div className="w-full md:w-2/4">
        <img src={imagePath} alt="Card Image" className="mt-4 w-full" style={styles.img} />
      </div>
    </div>
  );
};

export default Card;
