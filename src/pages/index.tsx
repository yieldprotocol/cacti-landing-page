import TopBar from "@/components/TopBar"
import { Inter } from 'next/font/google'
import Image from 'next/image'
import FeatureCardImg from '@/components/FeatureCardImg'
import FeatureCardText from '@/components/FeatureCardText'
import CactiFooter from "@/components/CactiFooter"
import MailchimpForm from "@/components/MailChimpForm"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <header>
        <TopBar />
      </header>
      <main
        className={`flex min-h-screen flex-col items-center ${inter.className}`}
        style={{
          backgroundImage: `url(/cactiBackgroundPattern.svg)`,
          backgroundRepeat: 'repeat',
        }}
      >

        {/* Top Panel */}
        <div className="flex flex-col items-center justify-center container mx-auto h-full" style={{ 
          height: '80vh', 
          background: `linear-gradient(to bottom right, #031016 0%, #031016 13%, rgba(3, 16, 22, 0.00) 50%) bottom right / 50% 50% no-repeat, 
            linear-gradient(to bottom left, #031016 0%, #031016 13%, rgba(3, 16, 22, 0.00) 50%) bottom left / 50% 50% no-repeat, 
            linear-gradient(to top left, #031016 0%, #031016 13%, rgba(3, 16, 22, 0.00) 50%) top left / 50% 50% no-repeat, 
            linear-gradient(to top right, #031016 0%, #031016 13%, rgba(3, 16, 22, 0.00) 50%) top right / 50% 50% no-repeat`
        }}>

        <div className="flex flex-col my-5">
         

          <div className="flex items-center text-center mx-auto">
            {/* <Image src="/cactiAILogo.svg" alt="Cacti.ai" width="544" height="200" className="mx-auto"/> */}
            <h1 className="text-5xl">Cacti 🌵</h1>
          </div>

          <div className="text-[28px] my-5">
            Interact with Web3 Protocols through Natural Language powered by OpenAI
          </div>

          {/* <input type="text" style={{
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#ffffff',
            color:' #333333'
          }}></input> */}

          <div className="flex items-center">
            {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-auto">
              Request Early Developer Access
            </button> */}

            <MailchimpForm />
            
          </div>

        </div>
          
        </div>

        {/* Panel 2 */}
        <div className="flex flex-col items-center justify-center container mx-auto h-full" style={{ height: '80vh' }}>
          <Image src="/screenshots/cacti-screen-swap.png" width="500" height='500' alt="swap screenshot" layout="responsive"/>
        </div>

        {/* Panel 3 */}
        <div className="flex flex-col items-center justify-center mx-auto h-full" style={{ 
          height: '40vh', 
          color: 'rgba(211, 232, 186, 1)', 
          background: `linear-gradient(to bottom right, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) bottom right / 50% 50% no-repeat, 
          linear-gradient(to bottom left, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) bottom left / 50% 50% no-repeat, 
          linear-gradient(to top left, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) top left / 50% 50% no-repeat, 
          linear-gradient(to top right, #031016 0%, #031016 33%, rgba(3, 16, 22, 0.00) 80%) top right / 50% 50% no-repeat` }}>
          <p className="text-5xl">Trade Assets. Retrieve Data.</p>
          <p className="text-5xl">Interact with Smart Contracts.</p>
          <div>
            <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.8)'}}>The groundbreaking Cacti web-interface is in alpha development, with many protocols already integrated, but more are on the way.</p>
          </div>
        </div>

        {/* feature carousel */}
        {/* <div className="flex items-center justify-center mx-auto h-full" style={{ height: '80vh' }}> */}
        <div className="grid grid-cols-2 mx-auto h-full" style={{ height: '80vh' }}>

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
              We've released Cacti under an AGPL license.
            </p>
            <p className="text-sm text-[28px]" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Use our developer features and start building in the open with us.
            </p>
          </div>
        </div>

        {/* Feature cards - no images */}
        <div className="container mx-auto px-12 py-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* <!-- Row 1 --> */}
            <div className="p-4">
              <FeatureCardText header="Natural Language Interactions" subHeader="Trade assets, manage NFTs, and more through simple text requests." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Easy Integrations" subHeader="Work with Javascript on the frontend or Python on the backend." />
            </div>
            <div className="p-4">
              <FeatureCardText header="ReactJS Component Framework" subHeader="Integrate UI with minimal frontend knowledge." />
            </div>
            
            {/* <!-- Row 2 --> */}
            <div className="p-4">
              <FeatureCardText header="Wallet based Authentication" subHeader="Ensure secure identification with web3 wallets." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Simplified Transaction Handling" subHeader="Let Cacti handle web3 transactions for user-friendly experiences." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Widget Commands" subHeader="Create interaction dialogue boxes for web3 actions or data access." />
            </div>
            
            {/* <!-- Row 3 --> */}
            <div className="p-4">
              <FeatureCardText header="Flexible Evaluation Framework" subHeader="Test the performance of widgets with hard-coded testing, automatic evaluations, or manually annotated CSV samples." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Chat Context Management" subHeader="Build context from previous interactions for improved user experiences." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Configurable Chat Modules" subHeader="Customize chat modules with alternative LLMs or prompts." />
            </div>
            
            {/* <!-- Row 4 --> */}
            <div className="p-4">
              <FeatureCardText header="Streaming Support" subHeader="Benefit from real-time updates and smooth handling of widget commands." />
            </div>
            <div className="p-4">
              <FeatureCardText header="Rich Media Support" subHeader="Handle structured media output like tables, NFTs, etc." />
            </div>
            <div className="p-4">
              <FeatureCardText header="More to come..." subHeader="Join our Community on Discord." />
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
