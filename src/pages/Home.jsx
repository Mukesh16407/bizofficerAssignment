import React, { useEffect, useState } from 'react'
import { Tables} from '../components/Tables'
import {Spinner} from '../components/Spinner';

export const Home = () => {

  const [showspin,setShowSpin] = useState(true);

  useEffect(()=>{

  setTimeout(()=>{
       setShowSpin(false)
  },1200)
},[])
  return (
    <div>
      {
        showspin? <Spinner/>:<Tables/>
      }
      
    </div>
  )
}
