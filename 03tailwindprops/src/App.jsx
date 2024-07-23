import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-2xl
     text-blue-500 font-bold hover:text-blue-400 transition-all hover:scale-125 cursor-pointer mb-4'>Tailwind test</h1>
     <button className='px-6 py-2 text-lg bg-slate-800 text-white rounded-xl hover:bg-black transition' onClick={() => setCount(c => c+1)}>count : {count}</button>
    </>
  )
}

export default App
