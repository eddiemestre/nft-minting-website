import React from 'react';

import {
    Btn
} from './Styles.jsx';


const WalletBtn = (props) => {
    return (
      <Btn shouldHover={props.active} onClick={props.function}>{props.text}</Btn>
    );
};

export default WalletBtn;