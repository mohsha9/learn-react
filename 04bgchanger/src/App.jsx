import { useState } from 'react'
import './App.css'
import Button from './button'

function App() {

  const buttons = ['red', 'green', 'yellow', 'lightblue', 'lightgreen', 'grey', 'pink', 'purple', 'olive', 'white', 'black'];

  return (
    <>
      <Button colors={buttons} />
    </>
  )
}

export default App
