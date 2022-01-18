import React, { useState, useEffect } from 'react';
import useUserAuthentication from '../../hooks/currentUser.jsx';
import WalletBtn from '../WalletBtn/index.jsx';
import MyEpicNFT from "../../utils/MyEpicNFT";

import {
    Body,
    Title,
    Info,
    Number,
    Btn,
    Address
} from './Styles.jsx';


const MintInfo = () => {

    const { currentAccount, connectedAccount, connectWallet } = useUserAuthentication();

    const renderNFTMinterGray = () => (
      <WalletBtn active={false} text="Mint" />
    );

        const renderNFTMinter = () => (
      <WalletBtn active={true} text="Mint" />
    );
    

    // Connect Wallet should say "Mint" if user is connected
    return (
        <>
            <Body>
                <Title>Degenerate
                <br />Animal Societies</Title>
                <Info>Deranged Loons dream of eclectic animal <br/>societies. Which one will you join?</Info>
                <Number>Societies Minted: 0 / 999</Number>
                <Btn>
                    { connectedAccount ? 
                    renderNFTMinter() : renderNFTMinterGray() }
                </Btn>
                <Address>Contract Address:<br/>0x88F240779B89658F66C993d93aD37BeE3Aedd907</Address>
            </Body>
        </>
    );
};

export default MintInfo;


// const CONTRACT_ADDRESS = "0x88F240779B89658F66C993d93aD37BeE3Aedd907";
// const contractABI = MyEpicNFT.abi;

// const [mintedNfts, setMintedNfts] = useState(0);

//     const getTotalNftsMinted = async () => {
//         try {
//          const { ethereum } = window;
   
//          if (ethereum) {
//            // allows us to talk to ethereum nodes
//            const provider = new ethers.providers.Web3Provider(ethereum);
           
//            const signer = provider.getSigner();
           
//            // create connection to contract
//            const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
   
//            const totalNfts = await connectedContract.getTotalNFTsMinted();
   
//            const nftTotals = totalNfts.toNumber();
   
//            setMintedNfts(nftTotals);
   
//          } else {
//            console.log("Ethereum object doesn't exist!");
//          }
//        } catch (error) {
//          console.log(error);
//        }
//      }
   
//      // listen for emitter events
//      useEffect(() => {
//        let nftContract;
   
//        const onNewMint = () => {
//          console.log('NewEpicNFTMinted');
//          getTotalNftsMinted();
//        };
   
//        if (window.ethereum) {
//          const provider = new ethers.providers.Web3Provider(ethereum);
           
//          const signer = provider.getSigner();
   
//          nftContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
//          nftContract.on('NewEpicNFTMinted', onNewMint);
//        }
   
//        return () => {
//          if (nftContract) {
//            nftContract.off('NewEpicNFTMinted', onNewMint);
//          }
//        };
//      }, []);