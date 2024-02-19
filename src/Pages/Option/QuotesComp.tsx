import  { useEffect, useState } from 'react'
import { QuotesType } from './Option';
import { Roostate } from '../../Store/GlobalStore';
import { useSelector } from 'react-redux';
import { OptionPageStyle } from '../../AllStyles';

// interface Props{
//     quotes: QuotesType[] | [],
//     setQuotes: React.Dispatch<React.SetStateAction<[] | QuotesType[]>>,
// }

function QuotesComp() {
const [quotes, setQuotes] = useState<QuotesType[] | []>([])
const darkMode = useSelector((state: Roostate) => state.user.darkMode)


    const randomQuote = Math.trunc(Math.random() * 16) + 1


    useEffect(() => {
        async function getQuotes(){
          const url = 'https://type.fit/api/quotes';
    
    
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
      setQuotes(result)
    } catch (error) {
        console.error(error);
    }
        }
        
        getQuotes()
      
       
      }, [])
      
      const {quote} = OptionPageStyle
    
  return (
    <>
       {
       ( quotes.length < 1 && <div className={quote.general + (darkMode ? quote.dark : quote.light)}>
          Loading...
        </div> ) || quotes.length > 0 && <div className="w-full my-4 text-center ">

         <p>
          
           {quotes[randomQuote]?.text}

           </p>

        </div>
      }
    </>
  )
}

export default QuotesComp