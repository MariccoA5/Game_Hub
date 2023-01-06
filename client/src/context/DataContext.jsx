import { createContext } from "react";

export const DataContext = createContext(null)

export const DataProvider = ({children}) => {
//  USE AUTH DAVE GRAY YTTT

  return (
    <DataContext.Provider >
      {children}
    </DataContext.Provider>
  )
};
