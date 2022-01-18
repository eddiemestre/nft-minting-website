import { useState, useEffect } from "react";
import { ethers } from "ethers";
import useUserAuthentication from './currentUser.jsx';
import MyEpicNFT from "../utils/MyEpicNFT.json";

const CONTRACT_ADDRESS = "0x88F240779B89658F66C993d93aD37BeE3Aedd907";
const contractABI = MyEpicNFT.abi;

const mintNft = () => {

const [mintedNfts, setMintedNfts] = useState(0);
const [transactionMining, setTransactionMining] = useState(false);

const { checkIfWalletIsConnected } = useUserAuthentication();

const askContractToMintNft = async () => {

    try {
      const { ethereum } = window;

      if (ethereum) {
        // allows us to talk to ethereum nodes
        const provider = new ethers.providers.Web3Provider(ethereum);
        
        const signer = provider.getSigner();
        
        // create connection to contract
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

        console.log("Going to pop wallet now to pay gas...");
        let nftTxn = await connectedContract.makeAnEpicNFT();
        setTransactionMining(true);

        console.log("Mining... please wait.");
        await nftTxn.wait();
        setTransactionMining(false);
        
        console.log(nftTxn);

        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

        getTotalNftsMinted();
      } else {
        console.log("Ethereum object doesn't exist!");
      } 
    } catch (error) {
      console.log(error);
    }
  }

  // runs our function when the page loads
  useEffect(() => {
    checkIfWalletIsConnected();
    getTotalNftsMinted();
  }, [])

    const getTotalNftsMinted = async () => {
        try {
         const { ethereum } = window;
   
         if (ethereum) {
           // allows us to talk to ethereum nodes
           const provider = new ethers.providers.Web3Provider(ethereum);
           
           const signer = provider.getSigner();
           
           // create connection to contract
           const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
   
           const totalNfts = await connectedContract.getTotalNFTsMinted();
   
           const nftTotals = totalNfts.toNumber();
   
           setMintedNfts(nftTotals);
   
         } else {
           console.log("Ethereum object doesn't exist!");
         }
       } catch (error) {
         console.log(error);
       }
     }
   
     // listen for emitter events
     useEffect(() => {
       let nftContract;
   
       const onNewMint = () => {
         console.log('NewEpicNFTMinted');
         getTotalNftsMinted();
       };
   
       if (window.ethereum) {
         const provider = new ethers.providers.Web3Provider(ethereum);
           
         const signer = provider.getSigner();
   
         nftContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
         nftContract.on('NewEpicNFTMinted', onNewMint);
       }
   
       return () => {
         if (nftContract) {
           nftContract.off('NewEpicNFTMinted', onNewMint);
         }
       };
     }, []);

     return {
       mintedNfts,
       getTotalNftsMinted,
       askContractToMintNft,
       transactionMining
     };
};

export default mintNft;