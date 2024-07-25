import { useState } from 'react'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './customHook/useCurrencyInfo.js'

function CurrencyConverter() {
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const covert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(/src/assets/image.jpg)`}}>
      <div className="w-full flex flex-col items-center gap-10">
        <div className='bg-white/10 border p-4 rounded-lg'>
          <h1 className='text-white text-2xl text-center'>Currency convertor</h1>
        </div>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/20">
          <form onSubmit={(e) => {
            e.preventDefault();
            covert();
          }}>
            <div className="w-full mb-1">
              <InputBox 
              label="From"
              amount={amount}
              onAmountChange={(amount) => 
                setAmount(amount)
              }
              onCurrenyChange={(currency) => 
                setFrom(currency)
              }
              selectCurrency={from}
              currencyOptions={options} />
            </div>

            <div className="relative w-full h-0.5">
              <button
                onClick={handleSwap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 active:bg-blue-500">
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To"
              amount={convertedAmount}
              selectCurrency={to}
              currencyOptions={options}
              amountdisable
              onCurrenyChange={(currency) => 
                setTo(currency)
              } />
            </div>

            <button type="submit" className="w-full bg-blue-600 active:bg-blue-500 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CurrencyConverter