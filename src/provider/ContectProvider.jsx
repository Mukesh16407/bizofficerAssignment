import React, { createContext, useState } from 'react'

export const showData = createContext();

export const ContectProvider = ({children}) => {
    const [show, setShow] = useState(false)
  return (
    <showData.Provider value={{show, setShow}}>
        {children}
    </showData.Provider>
  )
}
