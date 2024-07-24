import { useCallback, useEffect, useRef, useState } from "react"

function PasswordGenerator() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <div className="flex justify-center w-full h-full">
      <div className="bg-gray-700 mt-10 w-[450px] p-4 rounded-md">
        <h1 className="text-xl text-center mb-3 text-white">Password Generator</h1>
        <div className="flex justify-around">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="px-3 py-1 rounded-xl bg-amber-50 w-full outline-none"
          />
          <button
           onClick={copyPasswordToClipboard}
           className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-xl outline-none text-white ml-2">Copy</button>
        </div>
        <div className="flex mt-4 justify-evenly items-center">
          <div className="flex gap-1">
            <input
              onChange={(e) => {setLength(e.target.value)}}
              type="range"
              min={6}
              max={100}
              value={length} />
            <label className="text-amber-500 text-sm ">Length: {length}</label>
          </div>

          <div className="flex gap-1">
            <input type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed(prev => !prev);
            }} />
            <label htmlFor="numberInput" className="text-amber-500 text-sm ">Number</label>
          </div>
          
          <div className="flex gap-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed(prev => !prev);
            }} />
            <label htmlFor="charInput" className="text-amber-500 text-sm ">Character</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator