import React, { useState, useContext } from 'react'
import {data} from './data/ProjectsData';
import {dataa} from './data/NewsData';


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [project, setProject] = useState(data);
  const [news, setNews] = useState(dataa)
  return <AppContext.Provider 
  value={{project,news}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }