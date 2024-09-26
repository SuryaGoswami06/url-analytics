import React, { useEffect, useState } from 'react'
import axios from 'axios'

function QrCodes() {

  const [myLocation,setMyLocation]=useState('')
  const [error,setError] = useState('')

  useEffect(()=>{
    axios.get('https://url-analytics.onrender.com/get-my-location')
    .then(res=>console.log(res.data))
    .catch(err=>setError(err))
  
    
  },[])
  return (
    <div>g</div>
  )
}

export default QrCodes