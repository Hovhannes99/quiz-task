import { User } from "firebase/auth";
import React from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

interface IContextData {
  user: User;
  isAuth: boolean;
  logOut: () => void;
  addUser: (user: User) => void;
}

export const AuthContext = React.createContext({} as IContextData);

const Context: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState({} as User);
  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  const addUser = (user: User) => {
    setUser(user.toJSON() as User);
    setIsAuth(true);
  };

  const logOut = () => {
    setUser({} as User);
    setIsAuth(false);
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, logOut, addUser, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
