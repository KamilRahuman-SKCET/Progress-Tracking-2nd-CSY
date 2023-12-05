import React from 'react'
import './App.css'
const App = () =>{
  const handle = () =>{
    alert("Welcome to Test Page for Event Handler")
  }
  return (
    <>
    <h1><div className='text'>Welcome SKCET</div></h1>    
    <center><button onClick={handle}>Next </button></center>
    </>
  )
}

export default App