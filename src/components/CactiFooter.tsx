const styles = {
    footer: {
        backgroundColor: 'rgba(46, 140, 135, 1)'
    }
}

const CactiFooter = () => {
  return (
    <footer style={styles.footer} className="w-full mt-10">
        <div className="container mx-auto w-full">
            <div className="flex justify-between mx-3 py-5">
                <div className="mx-auto">
                    <h1 className="text-2xl">Cacti🌵</h1>
                </div>
            </div>
            
        </div>
    </footer>
  );
};

export default CactiFooter;
