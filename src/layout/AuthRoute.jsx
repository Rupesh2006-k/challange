import React, { useState } from "react";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AuthRoute = () => {
  const [toggle, settoggle] = useState(true);
  return (
    <div>
      {toggle ? (
        <Login settoggle={settoggle} />
      ) : (
        <SignUp settoggle={settoggle} />
      )}
    </div>
  );
};

export default AuthRoute;
