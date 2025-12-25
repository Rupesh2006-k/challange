import React, { createContext } from "react";
export const DataContext = createContext()
const UserContext = ({ children }) => {
  let a = "rupesh"
  
  return <div>

    <DataContext.Provider value={a}>
        {children}
    </DataContext.Provider>
  </div>;
};

export default UserContext;
