
interface TextCardProps {
    header: string;
    subHeader: string;
}

const styles = {
    card: {
        borderRadius: '16px',
        backgroundColor: 'rgba(3, 16, 22, 1)',
        border: '1px solid rgba(46, 140, 135, 1)',
        padding: '25px',
        display: 'flex',
        minHeight: '255px',
    },
    text: {
        header: {
            fontSize: '22px',
            fontWeight: '500',
            minHeight: '85px'
        },
        subHeader: {
            fontSize: '14px',
            fontWeight: '400',
            flex: '1'
        }
    }
}

const Card = ({ header, subHeader }: TextCardProps) => {
  return (
    <div className="rounded-lg shadow-md flex flex-col justify-center text-left mx-3" style={styles.card}>
      <div className="text-center">
        <h2 className="text-lg font-bold text-primary" style={styles.text.header}>{header}</h2>
      </div>
      <div style={styles.text.subHeader} className="text-center">
        <p className="text-white-600">{subHeader}</p>

      </div>
    </div>
  );
};

export default Card;
