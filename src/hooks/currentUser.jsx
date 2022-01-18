import { useState, useEffect } from "react";
import { ethers } from "ethers";
import MyEpicNFT from "../utils/MyEpicNFT.json";


const CONTRACT_ADDRESS = "0x88F240779B89658F66C993d93aD37BeE3Aedd907";
const contractABI = MyEpicNFT.abi;
  
const useUserAuthentication = () => {

  const [currentAccount, setCurrentAccount] = useState("");
  const [truncateAd, setTruncateAd] = useState("");
  const [connectedAccount, setConnectedAccount] = useState(false);

  // FUNCTION: checkIfWalletIsConnected
  // Params: none
  // Description: checks if an ethereum object is detected or grabs authorized account if already authorized
  const checkIfWalletIsConnected = async () => {

    // make sure we have access to window.ethereum
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    // check if we're authorized to access the user's wallet
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    // users can have multiple authorized accounts, we grab the first one if present
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      
      setCurrentAccount(account);
      setTruncateAd(truncateAddress(account))
      setConnectedAccount(true);

      console.log("checkIfWalletConnected, currentAccount, account, truncateAd, connectedAccount", currentAccount, account, truncateAd, connectedAccount);

      // set up listener for case where a user comes to the site and already has their wallet connected + authorized
      setUpEventListener();
    } else {
      console.log("No authorized account found");
    }
  };
  
  // FUNCTION: connectWallet
  // Params: none
  // Description: allows user to conect their wallet to the site
  // Note: This function currently supports Rinkeby Test Net ONLY
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      // method to request access to account
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];

      // should print out public address once we authorize MetaMask
      console.log("Connected", account);

      // get chainId
      let chainId = await ethereum.request({method: 'eth_chainId' });

      // determine if user is on the correct network
      const rinkebyChainId = "0x4";
      if (chainId !== rinkebyChainId) {
        alert("You are not connected to the Rinkeby Test Network.");
      }

      setCurrentAccount(account);
      setTruncateAd(truncateAddress(account));
      setConnectedAccount(true);

      console.log("connectWallet, currentAccount, account, truncateAd, connectedAccount", currentAccount, account, truncateAd, connectedAccount);

      // set up listener for case where a user comes to the site and connects their wallet for the first time
      setUpEventListener();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("Connected Account: ", connectedAccount);
    if (currentAccount !== "") {
      setConnectedAccount(true);
    }
  }, [])
  
  // FUNCTION: setUpEventListener
  // Params: none
  // Description: allows user to conect their wallet to the site
  // Note: sets up event listener
  const setUpEventListener = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS,
        contractABI, signer);

        // Captures event when contract throws it
        connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber());
          alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on Rarible. Here's the link: https://rinkeby.rarible.com/token/${CONTRACT_ADDRESS}:${tokenId.toNumber()}`)
        });

        console.log("Set up event listener!");
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
    console.log("connectedAccount 2: ", connectedAccount)
  /*  getTotalNftsMinted(); */
  }, [connectedAccount])




  // FUNCTION: truncateAddress
  // Params: none
  // Description: truncates text as specified
  const truncateAddress = (s) => {
    return `${s.substring(0, 6)}...${s.substring(38, s.length)}`
  }

  return {
    currentAccount,
    truncateAd,
    connectWallet,
    connectedAccount,
    checkIfWalletIsConnected
  };
};

export default useUserAuthentication;