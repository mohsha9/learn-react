import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
        const data = await res.json();
        setData(data[currency]);
      } catch(err) {
        console.log('Error:', err);
      }
    }
    fatchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;