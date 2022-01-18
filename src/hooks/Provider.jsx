import React, { useState } from "react";
import AuthContext from './Auth-Context.jsx';

const provider = props => {
  const [state, setState] = useState({
    loggedIn: false,
    status: "gerry"
  });

  return (
    <AuthContext.Provider
      value={{
        data: state,
        updateLogin: () => {
          setState({ ...state, loggedIn: true});
        }
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default provider;