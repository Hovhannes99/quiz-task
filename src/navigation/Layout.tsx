import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context";
import { auth } from "../configs/firebaseConfig/fireBase.config";
import { onAuthStateChanged } from "firebase/auth";

const Layout = () => {
  const { addUser, logOut } = React.useContext(AuthContext);
  const [showDomThree, setShowDomThree] = React.useState<Boolean>(false);
  const router = useNavigate();

  React.useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addUser(user);
        router("/");
      } else {
        logOut();
      }
      setShowDomThree(true);
    });
  }, []);

  if (!showDomThree) {
    return null;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Layout;
