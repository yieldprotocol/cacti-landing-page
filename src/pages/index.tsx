import TopBar from "@/components/TopBar";
import { useRef, useEffect } from "react";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import FeatureCardMedia from "@/components/FeatureCardMedia";
import FeatureCardText from "@/components/FeatureCardText";
import CactiFooter from "@/components/CactiFooter";
import MailchimpForm from "@/components/MailChimpForm";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  const animationEl = useRef<HTMLSpanElement | null>(null);
  const Typed = require("typed.js");

  useEffect(() => {
    const typed = new Typed(animationEl.current, {
      strings: [
        "Web3 Protocols",
        "Smart Contracts",
        "NFT Markets",
        "Defi Protocols",
      ],
      typeSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [animationEl]);

  return (
    <div>
      <header className={`${robotoMono.className}`}>
        <TopBar />
      </header>
      <main
        className={`flex flex-col items-center overflow-scroll ${robotoMono.className} bg-cacti-dark-blue`}
      >
        {/* Top Panel */}
        <div
          className="flex flex-col items-center justify-center mt-0 border-cacti-green border-y-2 w-full mx-0 sm:min-h-[80h] lg:min-h-[50vh] xl:min-h-[50vh]"
          style={{
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
            // border: '1px solid rgba(46, 140, 135, 1)',
          }}
        >
          <div className="flex flex-col my-5 mt-12 px-3 md:px-0">
            <div className="flex items-center text-center mx-auto">
              <h1 className="text-3xl lg:text-6xl text-white">
                🌵🌵🌵 CACTI 🌵🌵🌵
              </h1>
            </div>

            <div className="text-md md:text-[22px] mt-5 text-center text-white">
              Use Natural language to Interact with{" "}
              <div className="inline-block min-w-[215px] text-left">
                <span ref={animationEl}>Web3 Protocols</span>
              </div>
            </div>
            <div className="flex items-center justify-center text-sm md:text-[16px] my-5 text-center text-white">
              Built by&nbsp;
              <a
                href="https://yieldprotocol.com/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Yield
              </a>
              &nbsp;
              <img
                src={"/icons/yield-logo-white.svg"}
                alt="icon"
                className="icon w-[16px]"
              />
              . Powered by OpenAI.
            </div>

            <div className="flex items-center w-full">
              <MailchimpForm />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-items-center my-3">
              <a
                href="https://github.com/yieldprotocol/cacti-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto sm:ml-auto sm:mr-4"
              >
                <button className="border border-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-auto">
                  Show me the code 💻
                </button>
              </a>
              <a
                href="https://app.cacti.finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto sm:mr-auto mt-3 sm:mt-0 sm:ml-1"
              >
                <button className="border border-white hover:border-white bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded mx-auto">
                  Try the Beta 🚀
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="flex flex-col container items-center justify-center mx-auto mt-12 mb-1 px-3 md:px-0 bg-fade-black-to-transparent min-h-[40vh] text-primary">
          <p className="text-lg md:text-3xl lg:text-5xl">
            Trade Assets. Retrieve Data.
          </p>
          <p className="text-lg md:text-3xl lg:text-5xl">
            Interact with Smart Contracts.
          </p>
          <div className="text-center pt-2">
            <p
              className="text-sm md:text-lg text-white"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              The groundbreaking Cacti web-interface is in alpha development,
              with many protocols already integrated, and more on the way.
            </p>
          </div>
        </div>

        {/* Panel 2 */}
        <div
          className="flex flex-col items-center justify-center container mx-auto h-full w-5/6 md:w-2/4 border border-cacti-green rounded-md p-1 mb-10"
          style={{}}
        >
          <iframe
            src="https://www.youtube.com/embed/cmTlxiU0r-Y"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full aspect-video"
          ></iframe>
        </div>

        {/* features */}
        <div className="flex flex-col mx-auto h-full" style={{}}>
          {/* Uniswap commented out until video */}
          {/* <div>
            <FeatureCardMedia 
              header="Trade Assets with Uniswap" 
              subHeader="Trade assets with ease through Cacti. Type your request, and Cacti will manage the swap for you." 
              imagePath="/screenshots/Uniswap.png" 
            />
          </div> */}

          <div>
            <FeatureCardMedia
              header="Search and Acquire NFTs with Opensea"
              subHeader="Search for NFTs by typing your request. Discover Collections and NFTs available for purchase and acquire them directly through Cacti."
              youtubeId="gPCMZ2b2BZg"
            />
          </div>

          <div>
            <FeatureCardMedia
              header="Register and Interact with ENS Domains"
              subHeader="Effortlessly register and actively manage ENS domains to streamline your online presence."
              youtubeId="-qiqliXZBDw"
            />
          </div>
        </div>

        {/* Panel 4 */}
        <div className="flex flex-col items-center justify-center mx-auto min-h-[40vh] text-primary bg-fade-black-to-transparent">
          <p className="text-lg md:text-3xl lg:text-5xl mb-5">
            Open source and built in Public
          </p>
          <div className="text-center flex flex-col">
            <p
              className="text-sm md:text-lg text-[28px] mb-3 text-white"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              We&apos;ve released Cacti under an AGPL license.
            </p>
            <p
              className="text-sm md:text-lg text-[28px] text-white"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              Use our developer features and start building in the open with us.
            </p>
          </div>
        </div>

        {/* Feature cards - no images */}
        <div className="container mx-auto px-12 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-0">
              <FeatureCardText
                header="Natural Language Interactions"
                subHeader="Allow users to trade assets, manage NFTs, and more through simple text requests and responses."
              />
            </div>
            <div className="p-0">
              <FeatureCardText
                header="Easy Integrations"
                subHeader="Seamlessly add web3 actions with Javascript on the frontend or Python on the backend."
              />
            </div>
            <div className="p-0">
              <FeatureCardText
                header="ReactJS Component Framework"
                subHeader="Our library lets you build your UI quickly with minimal frontend knowledge."
              />
            </div>
            <div className="p-0">
              <FeatureCardText
                header="Wallet based Authentication"
                subHeader="Ensure secure identification and transactions with user's wallets, powered by RainbowKit"
              />
            </div>
            <div className="p-0">
              <FeatureCardText
                header="Flexible Evaluation Framework"
                subHeader="Test the performance of widgets with hard-coded testing, automatic evaluations, or manually annotated CSV samples."
              />
            </div>
            <div className="p-0">
              <FeatureCardText
                header="Chat Context Management"
                subHeader="Build context from previous interactions for improved UX, and revisit past conversations with 1 click."
              />
            </div>
          </div>
        </div>

        {/* Panel 6 */}
        <div className="flex flex-col items-center justify-center mx-auto text-primary bg-fade-black-to-transparent min-h-[40vh] w-5/6">
          <p className="text-lg md:text-5xl mb-5">Come build with us</p>
          <div className="text-center flex flex-col">
          <div className="flex flex-col sm:flex-row items-center justify-items-center my-3">
              <a
                href="https://github.com/yieldprotocol/cacti-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto sm:ml-auto sm:mr-4"
              >
                <button className="border border-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-auto">
                  Show me the code 💻
                </button>
              </a>
              <a
                href="https://app.cacti.finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto sm:mr-auto mt-3 sm:mt-0 sm:ml-1"
              >
                <button className="border border-white hover:border-white bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded mx-auto">
                  Try the Beta 🚀
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <CactiFooter />
      </main>
    </div>
  );
}
