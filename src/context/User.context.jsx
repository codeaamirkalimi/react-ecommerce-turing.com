import { createContext, useState } from "react";

//userContext
export const UserContext = createContext({
  //default value
  currentUser: null,
  setCurrentUser: () => null,
});
//userProvider
export const UserProvider = ({ children }) => {
  //set value
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
