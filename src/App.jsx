// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {
//     const [width,setWidth]=useState(window.innerwidth);

//     useEffect(()=>{
//         window.addEventListener("resize",()=>{
//             setWidth(window.innerWidth)
//         })
//       },[])

//   return (
//    <div className="maindiv">
//       <h1>{width}</h1>
//    </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'

const App = () => {
  const [userdata,setUserdat]=useState([])

  useEffect(()=>{
    window.fetch("https://api.github.com/users")
    .then((x)=>x.json())
    .then((data)=>setUserdat(data))
    .catch(err =>err)

  },[])
  return (
    <div className="maindiv">
     {
        userdata.map((x,index)=>{
            <li key={index}>{x}</li>
        })
     }
    </div>
  )
}

export default App