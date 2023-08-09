
interface TextCardProps {
    header: string;
    subHeader: string;
}

const styles = {
    card: {
        borderRadius: '16px',
        backgroundColor: 'rgba(3, 16, 22, 1)',
        border: '1px solid rgba(46, 140, 135, 1)',
        padding: '32px',
    },
    text: {
        header: {
            fontSize: '22px',
            fontWeight: '500',
        },
        subHeader: {
            fontSize: '14px',
            fontWeight: '400',
            height: '63px'
        }
    }
}

const Card = ({ header, subHeader }: TextCardProps) => {
  return (
    <div className="w-636 h-598 rounded-lg shadow-md flex flex-col justify-center text-left mx-3" style={styles.card}>
      <h2 className="text-xl font-bold" style={styles.text.header}>{header}</h2>
      <div style={styles.text.subHeader}>
        <p className="text-gray-600">{subHeader}</p>

      </div>
    </div>
  );
};

export default Card;
