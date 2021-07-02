import { useState, useEffect } from 'react'

const Quotes = () => {

  function randomNumber(min, max) { 
    return parseInt(Math.random() * (max - min) + min)
}
  let rand = randomNumber(0,20)
    
    const [quote, setQuote] = useState({})

    useEffect(() => {
        const getQuotes = async () => {
          const quote = await getQuote()
         
          setQuote(quote)
        }
    
        getQuotes()
      }, [])

    async function getQuote(){

        let response = await fetch('http://127.0.0.1:5000/api/quote/');
        let quotes = await response.json()
        return quotes
    
      } 
 
      let q = []
      if (quote[rand] !== undefined) {
  
          q.push(quote[rand].quote)
          q.push(quote[rand].author)

      }
      
    return (
        <div className='text-center quoteCon'>

            <p className='quote'>
        
        {q[0]}
 
            </p>

            <p className='author'>{q[1]} </p>
         
        </div>
    )
}

export default Quotes
