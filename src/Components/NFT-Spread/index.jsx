import React from 'react';
import mintNft from '../../hooks/mintNft.jsx';

import {
    Glow,
    Left,
    Middle,
    Top,
    Loader
} from './Styles.jsx';

const NFTRenderer = () => {
    const { transactionMining } = mintNft();

    const displayNft = () => (
      <Loader>Display Nft</Loader>
    );

    const displayLoader = () => (
      <Loader>Display Loader</Loader>
    );



    return (
        <>
            <Glow />
            <Left />
            <Middle />
            <Top>
             {transactionMining ? displayLoader() : displayNft()}
            </Top>
        </>

    );
};

export default NFTRenderer;