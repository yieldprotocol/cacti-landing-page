
const CactiFooter = () => {
  return (
    <footer className='bg-[#2e8c87] bg-opacity-50'>
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
