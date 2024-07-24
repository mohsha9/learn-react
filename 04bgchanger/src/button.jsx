import { useState } from "react"

function Button({ colors }) {

  const [color, setColor] = useState('');

  const renderButton = colors.map((buttonColor, i) => {

    const capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
      <button key={i} className={buttonColor === 'black' ? 'text-white px-3 py-2 rounded-lg text-sm mx-[3px] hover:opacity-85 transition-all' : 'px-3 py-2 rounded-lg text-sm mx-[3px] hover:opacity-85 transition-all'}
      style={{backgroundColor: buttonColor}}
      onClick={() => setColor(buttonColor)}
      >
        {capitalize(buttonColor)}
      </button>
    )
  })

  return (
    <div className='flex justify-center items-center flex-col w-full h-screen transition-all duration-200' 
    style={{backgroundColor: color}}>
      <div className="backdrop-blur-sm bg-white bg-opacity-70 shadow-md p-2 rounded-md">
        {renderButton}
      </div>
    </div>
  )
}

export default Button