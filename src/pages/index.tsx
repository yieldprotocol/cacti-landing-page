import TopBar from "@/components/TopBar"
import { Inter, Roboto_Mono } from 'next/font/google'
import Image from 'next/image'
import FeatureCardImg from '@/components/FeatureCardImg'
import FeatureCardText from '@/components/FeatureCardText'
import CactiFooter from "@/components/CactiFooter"
import MailchimpForm from "@/components/MailChimpForm"

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <header className={`${robotoMono.className}`}>
        <TopBar />

      </header>
      <main
        className={`flex max-h-screen flex-col items-center overflow-scroll ${robotoMono.className} bg-cacti-dark-blue`}
        
      >

        {/* Top Panel */}
        <div className="flex flex-col items-center justify-center mt-16 container mx-auto w-full mx-0 rounded-xl sm:min-h-[80h] lg:min-h-[50vh] xl:min-h-[50vh]" style={{ 
          background: `linear-gradient(
            70deg,
            hsl(199deg 76% 5%) 0%,
            hsl(194deg 85% 7%) 16%,
            hsl(192deg 100% 8%) 33%,
            hsl(189deg 100% 9%) 49%,
            hsl(184deg 100% 10%) 63%,
            hsl(178deg 100% 11%) 70%,
            hsl(172deg 100% 13%) 77%,
            hsl(165deg 100% 14%) 84%,
            hsl(158deg 100% 16%) 92%,
            hsl(151deg 100% 17%) 100%
          )`,
          border: '1px solid rgba(46, 140, 135, 1)',
        }}>

        <div className="flex flex-col my-5 mt-12 px-3 md:px-0">
         

          <div className="flex items-center text-center mx-auto">
            <h1 className="text-4xl lg:text-6xl text-white">🌵🌵🌵CACTI🌵🌵🌵</h1>
          </div>

          <div className="text-md md:text-[22px] mt-5 text-center text-white">
            Interact with Web3 Protocols through Natural Language
          </div>
          <div className="flex items-center justify-center text-sm md:text-[16px] my-5 text-center text-white">
            Built by&nbsp;<a href="https://yieldprotocol.com/" target="_blank" rel="noreferrer" className="underline">Yield</a>&nbsp;<img src={'/icons/yield-logo-white.svg'} alt="icon" className="icon w-[16px]" />. Powered by OpenAI.
          </div>

          <div className="flex items-center w-full">

            <MailchimpForm />
            
          </div>
          <div className="flex items-center my-3">
            <a href="https://github.com/yieldprotocol/cacti-backend" target="_blank" rel="noopener noreferrer" className="mx-auto">
              <button className="border border-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-auto">
                Show me the code 💻
              </button>
            </a>
          </div>

        </div>
          
        </div>

        {/* Panel 3 */}
        <div className="flex flex-col items-center justify-center mx-auto mt-12 mb-1 px-3 md:px-0 bg-fade-black-to-transparent min-h-[40vh] text-primary" style={{ 
          
          // color: 'rgba(211, 232, 186, 1)', 
           }}>
          <p className="text-lg md:text-3xl lg:text-5xl">Trade Assets. Retrieve Data.</p>
          <p className="text-lg md:text-3xl lg:text-5xl">Interact with Smart Contracts.</p>
          <div className="text-center lg:text-left">
            <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.8)'}}>The groundbreaking Cacti web-interface is in alpha development, with many protocols already integrated, and more on the way.</p>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="flex flex-col items-center justify-center container mx-auto h-full w-5/6 md:w-2/4 border border-cacti-green rounded-md py-1 mb-10" style={{}}>
            <video controls height="auto">
              <source src="/videos/yieldVideoHighRes.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>


        {/* features */}
        <div className="flex flex-col mx-auto h-full" style={{  }}>

          <div>
            <FeatureCardImg 
              header="Trade Assets with Uniswap" 
              subHeader="Trade assets with ease through Cacti. Type your request, and Cacti will manage the swap for you." 
              imagePath="/screenshots/Uniswap.png" 
            />
          </div>

          <div>
            <FeatureCardImg
              header="Search and Acquire NFTs with Opensea"
              subHeader="Search for NFTs by typing your request. Discover Collections and NFTs available for purchase and acquire them directly through Cacti."
              imagePath="/screenshots/Opensea.png"
            />
          </div>


        </div>

        {/* Panel 4 */}
        <div className="flex flex-col items-center justify-center mx-auto min-h-[40vh] text-primary bg-fade-black-to-transparent">
          <p className="text-lg md:text-3xl lg:text-5xl mb-5">Open source and built in Public</p>
          <div className="text-center flex flex-col">
            <p className="text-sm text-[28px] mb-3" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              We&apos;ve released Cacti under an AGPL license.
            </p>
            <p className="text-sm text-[28px]" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Use our developer features and start building in the open with us.
            </p>
          </div>
        </div>

        {/* Feature cards - no images */}
        <div className="container mx-auto px-12 py-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
            <div className="p-0">
              <FeatureCardText header="Natural Language Interactions" subHeader="Allow users to trade assets, manage NFTs, and more through simple text requests and responses." />
            </div>
            <div className="p-0">
              <FeatureCardText header="Easy Integrations" subHeader="Seamlessly add web3 actions with Javascript on the frontend or Python on the backend." />
            </div>
            <div className="p-0">
              <FeatureCardText header="ReactJS Component Framework" subHeader="Our library lets you build your UI quickly with minimal frontend knowledge." />
            </div>
            <div className="p-0">
              <FeatureCardText header="Wallet based Authentication" subHeader="Ensure secure identification and transactions with user's wallets, powered by RainbowKit" />
            </div>
            <div className="p-0">
              <FeatureCardText header="Flexible Evaluation Framework" subHeader="Test the performance of widgets with hard-coded testing, automatic evaluations, or manually annotated CSV samples." />
            </div>
            <div className="p-0">
              <FeatureCardText header="Chat Context Management" subHeader="Build context from previous interactions for improved UX, and revisit past conversations with 1 click." />
            </div>
            
            
          </div>
        </div>

         {/* Panel 6 */}
         <div className="flex flex-col items-center justify-center mx-auto text-primary bg-fade-black-to-transparent min-h-[40vh] w-5/6"  >
          <p className="text-lg md:text-5xl mb-5">Come build with us</p>
          <div className="text-center flex flex-col">
            <div className="flex items-center">
            <a href="https://github.com/yieldprotocol/cacti-backend" target="_blank" rel="noopener noreferrer">
              <button className="border border-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-auto">
                Show me the code 💻
              </button>
            </a>
            </div>
          </div>
        </div>
        
      {/* FOOTER */}
        <CactiFooter />
      </main>


    </div>
  )
}
