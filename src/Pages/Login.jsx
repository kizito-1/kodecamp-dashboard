import React from 'react'
import { useEffect, useState } from 'react'

const Login = () => {
 let [count, setCount] = useState(0)
   
  useEffect(() => {
    console.log(`You clicked me ${count} times`)
  }, [count])

  return (
    <div>
     
    </div>
  )
}

export default Login