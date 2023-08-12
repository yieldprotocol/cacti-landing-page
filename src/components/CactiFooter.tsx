const styles = {
    footer: {
        backgroundColor: 'rgba(46, 140, 135, 1)'
    }
}

const CactiFooter = () => {
  return (
    <footer style={styles.footer} className="w-full mt-10">
        <div className="container mx-auto w-full">
            <div className="flex justify-between py-5">
                <div className="">
                    <h1 className="text-2xl">🌵🌵🌵CACTI🌵🌵🌵</h1>
                </div>
                <div className="flex items-center justify-center">
                    Built by&nbsp;<a href="https://yieldprotocol.com/" target="_blank" rel="noreferrer" className="underline">Yield</a>&nbsp; <img src={'/icons/yield-logo-white.svg'} alt="icon" className="icon w-[16px]" />
                </div>
            </div>
            
        </div>
    </footer>
  );
};

export default CactiFooter;
