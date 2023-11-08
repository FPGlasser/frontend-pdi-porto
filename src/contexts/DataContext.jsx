import React, { createContext, useState } from "react";
import InitialData from '../data/mock/initialdata.json'

export const DataContext = createContext({data: InitialData, updateData: ()=>{}})


const DataContextProvider = ({children}) => {
  
  const [data, setData] = useState(InitialData)

  const handleUpdateData = (data) => {
    setData(data)
    console.log("updated")
  }
  return (
    <DataContext.Provider value={{...data, updateData: handleUpdateData}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider