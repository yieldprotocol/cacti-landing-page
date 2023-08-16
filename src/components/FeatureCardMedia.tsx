

interface CardProps {
  header: string;
  subHeader: string;
  imagePath?: string;
  videoPath?: string;
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

const Card = ({ header, subHeader, imagePath, videoPath }: CardProps) => {
  return (
    <div className="rounded-lg shadow-md flex flex-col md:flex-row justify-center text-left mx-auto my-5 w-5/6" style={styles.card}>
      <div className="flex flex-col w-full md:w-2/4 text-center md:text-left my-0 md:my-auto px-3">
        <h2 className="text-xl font-bold mt-0 mb-0 text-primary" style={styles.text.header}>
          {header}
        </h2>
        <p className="text-white-600 mt-3" style={styles.text.subHeader}>
          {subHeader}
        </p>
      </div>
      <div className="w-full md:w-2/4 border border-cacti-green rounded-md">
        {imagePath && !videoPath && (
          <img src={imagePath} alt="Card Image" className="w-full" style={styles.img} />
        )}
        {videoPath && (
          <video controls className="w-full" style={styles.img}>
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default Card;