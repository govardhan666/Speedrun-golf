import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { HallOfFame } from "~~/components/HallOfFame";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-8">
        <div className="px-5">
          <h1 className="text-center mb-1">
            <span className="block text-2xl mb-2">Welcome to</span>
            <img src="/GOLF-LOGO.png" alt="SpeedRun Golf Logo" className="heroimg h-80" />
          </h1>
        </div>
        <div>
          <p className="text-center text-lg break-words mx-auto w-7/8 rounded-xl border-2 border-primary bg-white bg-opacity-10 p-4">
            Swing into the world of Linea with SpeedRun Golf, a compelling on-chain adventure Golf game 🏌‍♀.<br />
            It's more than a game - it's an interactive experience where exploring smart contract security, testing protocols and Solidity become part of the gameplay.<br />
            {" "}
          </p>

          <p className="text-center text-lg break-words mx-auto w-7/8 rounded-xl border-2 border-primary bg-white bg-opacity-10 p-4">
            <strong>To jump into the game, you'll need just two things: a digital wallet and a bit of Sepolia ETH .</strong><br />
            Each shot in the game requires a small amount of ETH, plus a nominal gas fee for the transaction. <br />
            ℹ️ First you need to pay Greens Fee of 0.02 Eth as an entry fee <br />
            ℹ️ After that you need to spend atleast 0.01 Eth for playing each shot <br />
            

            Need Sepolia ETH? Check out these <a href="https://faucetlink.to/sepolia" target="_blank" rel="noopener noreferrer" className="text-xl">faucets</a> where you can easily obtain it.<br />
            If you have any questions or need guidance, feel free to reach out. We’re here to help make your gaming experience smooth and enjoyable!<br />
            <br />
            🚨 The Greens Fee of 0.02 Eth and the Gas cost will not be refunded, all remaining played balances can be withdrawn at any time. 🚨
            <br />
          </p>

          <p className="text-center text-2xl mt-10">
            🏌️ With that being said, click on the{" "}
            <a href="/example-ui" className="no-underline hover:no-underline">
              <code>Play Golf</code>
            </a>
            {" "}tab and let's tee off into the world of Linea gaming! ⛳️
          </p>
        </div>

        <div className="grassland flex flex-col mx-auto w-1/2 justify-center items-center rounded-xl border-2 border-primary bg-[url('/assets/grass-bit.jpeg')] bg-repeat p-4 mt-10 mb-5">
          <HallOfFame />
        </div>
      </div>
    </>
  );
};

export default Home;