import abi from "./contract/May.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x921a49481e3A88ff88c75CAa544A7277CBa0e353";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setState({ provider, signer, contract });
        } else {
          alert("Please install MetaMask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Schema Provider App
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-1 lg:grid-rows-2 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Write a Memo</h2>
              <Buy state={state} />
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Memos</h2>
              <Memos state={state} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
