import React from 'react';
import useUserAuthentication from '../../hooks/currentUser.jsx';
import AuthContext from '../../hooks/Auth-Context.jsx';
import WalletBtn from '../WalletBtn/index.jsx';
import MyEpicNFT from "../../utils/MyEpicNFT.json";

import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn
} from './Styles.jsx';



// Connect Wallet should show wallet address if user is Connected
const Navbar = () => {

    const { currentAccount, truncateAd, connectWallet, connectedAccount } = useUserAuthentication();


    // Render Methods
    const renderNotConnectedContainer = () => (
      <WalletBtn active={true} function={connectWallet} text="Connect Wallet" />
    );

    // future: clicking should disconnect wallet 
    const renderConnectedContainer = () => (
      <WalletBtn active={false} text={truncateAd} />
    );
      
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                    <NavLink to='/roadmap'>
                        Roadmap
                    </NavLink>
                    <NavLink to='/team'>
                        Team
                    </NavLink>
                    <NavLink to='/discord'>
                        Discord
                    </NavLink>
                    <NavLink to='/OpenSea'>
                        OpenSea
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    { connectedAccount ? 
                    renderConnectedContainer() : renderNotConnectedContainer() }
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;