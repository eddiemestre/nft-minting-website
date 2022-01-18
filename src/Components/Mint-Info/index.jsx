import React, { useState, useEffect } from 'react';
import useUserAuthentication from '../../hooks/currentUser.jsx';
import mintNft from '../../hooks/mintNft.jsx';
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

    const { mintedNfts, askContractToMintNft, transactionMining } = mintNft();

    // future - just have this be connect wallet?
    const renderNFTMinterGray = () => (
      <WalletBtn active={false} text="Connect Wallet to Mint" />
    );

    const renderNFTMinter = () => (
      <WalletBtn active={true} function={askContractToMintNft} text="Mint" />
    );

    const renderMinting = () => (
       <WalletBtn active={false} text="Minting" />
    )
    

    // Connect Wallet should say "Mint" if user is connected
    return (
        <>
            <Body>
                <Title>Degenerate
                <br />Animal Societies</Title>
                <Info>Deranged Loons dream of eclectic animal <br/>societies. Which one will you join?</Info>
                <Number>Societies Minted: {mintedNfts} / 999</Number>
                <Btn>
                    { connectedAccount ? 
                    (transactionMining ? renderMinting() : renderNFTMinter()) : renderNFTMinterGray() }
                </Btn>
                <Address>Contract Address:<br/>0x88F240779B89658F66C993d93aD37BeE3Aedd907</Address>
            </Body>
        </>
    );
};

export default MintInfo;


