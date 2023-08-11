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
        className={`flex max-h-screen flex-col items-center overflow-scroll ${robotoMono.className}`}
        style={{
          backgroundImage: `url(/cactiBackgroundPattern.svg)`,
          backgroundRepeat: 'repeat',
        }}
      >

        {/* Top Panel */}
        <div className="flex flex-col items-center justify-center mt-16 container mx-auto w-full mx-0 rounded-xl" style={{ 
          // height: '', 
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
          minHeight: '50vh'
        }}>

        <div className="flex flex-col my-5 mt-12">
         

          <div className="flex items-center text-center mx-auto">
            <h1 className="text-5xl">Cacti 🌵</h1>
          </div>

          <div className="text-[28px] my-5">
            Interact with Web3 Protocols through Natural Language powered by OpenAI
          </div>

          <div className="flex items-center w-full">

            <MailchimpForm />
            
          </div>
          <div className="flex items-center my-3">
            <button className="border border-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-auto">
              Show me the code 💻
            </button>
          </div>

        </div>
          
        </div>

        {/* Panel 3 */}
        <div className="flex flex-col items-center justify-center mx-auto my-12 h-full" style={{ 
          height: '40vh', 
          color: 'rgba(211, 232, 186, 1)', 
          background: `linear-gradient(to bottom right, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) bottom right / 50% 50% no-repeat, 
          linear-gradient(to bottom left, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) bottom left / 50% 50% no-repeat, 
          linear-gradient(to top left, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) top left / 50% 50% no-repeat, 
          linear-gradient(to top right, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) top right / 50% 50% no-repeat` }}>
          <p className="text-5xl">Trade Assets. Retrieve Data.</p>
          <p className="text-5xl">Interact with Smart Contracts.</p>
          <div>
            <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.8)'}}>The groundbreaking Cacti web-interface is in alpha development, with many protocols already integrated, and more on the way.</p>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="flex flex-col items-center justify-center container mx-auto h-full" style={{}}>
          <div className="flex flex-col items-center justify-center container mx-auto h-full" style={{}}>
            <video controls width="50%" height="auto">
              <source src="/videos/yieldCacti.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>


        {/* features */}
        <div className="flex flex-col mx-auto h-full" style={{ height: '80vh' }}>

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
        <div className="flex flex-col items-center justify-center mx-auto h-full" style={{ height: '40vh', color: 'rgba(211, 232, 186, 1)', background: `linear-gradient(to bottom right, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) bottom right / 50% 50% no-repeat, 
            linear-gradient(to bottom left, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) bottom left / 50% 50% no-repeat, 
            linear-gradient(to top left, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) top left / 50% 50% no-repeat, 
            linear-gradient(to top right, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) top right / 50% 50% no-repeat` }}>
          <p className="text-5xl mb-5">Opensource and built in Public</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          
            <div className="p-4">
              <FeatureCardText header="Natural Language Interactions" subHeader="Trade assets, manage NFTs, and more through simple text requests." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Easy Integrations" subHeader="Work with Javascript on the frontend or Python on the backend." />
            </div>
            <div className="p-4">
              <FeatureCardText header="ReactJS Component Framework" subHeader="Integrate UI with minimal frontend knowledge." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Wallet based Authentication" subHeader="Ensure secure identification with web3 wallets." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Flexible Evaluation Framework" subHeader="Test the performance of widgets with hard-coded testing, automatic evaluations, or manually annotated CSV samples." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Chat Context Management" subHeader="Build context from previous interactions for improved user experiences." />
            </div>
            
            
          </div>
        </div>

         {/* Panel 6 */}
         <div className="flex flex-col items-center justify-center mx-auto h-full" style={{ height: '40vh', color: 'rgba(211, 232, 186, 1)',background: `linear-gradient(to bottom right, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 70%) bottom right / 50% 50% no-repeat, 
            linear-gradient(to bottom left, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 70%) bottom left / 50% 50% no-repeat, 
            linear-gradient(to top left, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 70%) top left / 50% 50% no-repeat, 
            linear-gradient(to top right, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 70%) top right / 50% 50% no-repeat` }}>
          <p className="text-5xl mb-5">Get Access and Build with us.</p>
          <div className="text-center flex flex-col">
            {/* <p className="text-sm text-[28px] mb-3" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              We've released Cacti under an AGPL license.
            </p> */}
            <div className="flex items-center">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-auto">
                Request Early Developer Access
              </button>
            </div>
          </div>
        </div>
        
      </main>

      {/* FOOTER */}
      <CactiFooter />

    </div>
  )
}
