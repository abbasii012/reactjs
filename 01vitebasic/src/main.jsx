import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import Counter from './Counter.jsx'
const username = 'haseeb'
// function MyApp(){
//   return(

// <div>
//   <h1>Custom React !</h1>
// </div>  );
// }
  //  const ReactElement =React.createElement(
  //   'a',
  //   {href: 'https://www.google.com/',
  //   target :  '_blank',}
  //   ,'click me For Google',
  //   username
  // )
createRoot(document.getElementById('root')).render(

 < Counter/>

)
