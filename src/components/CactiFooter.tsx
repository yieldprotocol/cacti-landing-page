const styles = {
    footer: {
        backgroundColor: 'rgba(46, 140, 135, 0.1)'
    }
}

const CactiFooter = () => {
  return (
    <footer style={styles.footer}>
        <div className="container mx-auto max-w-full">
            <div className="flex justify-between mx-10 py-10">
                <img src="/cactiAILogo.svg" alt="Cacti Logo" />
                {/* socials */}
                <div className="flex">
                    <img src="/icons/twitter.svg" alt="Twitter" className="mr-3" />
                    <img src="/icons/discord.svg" alt="Discord" />   
                </div>
            </div>
            
        </div>
    </footer>
  );
};

export default CactiFooter;
