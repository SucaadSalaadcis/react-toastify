import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  function test () {
    toast.success("Updated Successfully...")
  }


  return (
    <>
    <div>
      <h1 className='font-bold'>Hello</h1>
      <p onClick={test}>Suad</p>
      

    </div>
    <ToastContainer/>
    </>
  )
}

export default App