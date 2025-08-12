import { SetStateAction, useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = { //export when we want to use it in other files
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  //const [quote, setQuote] = useState<Quote | undefined>(); Initialize quote as undefined without a default value
  const [quotes, setQuotes] = useState<Quote[]>([]); // Initialize quotes as an empty array of type Quote array
  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      {
        //basically react cant render object so we have to map it to string,number or JSX Element. React knows which and what to render
        <Quotes
        setQuotes={setQuotes}
        >

          <div>
            {quotes.map((quote) => { // Iterate over quotes array then map each quote to an InspirationalQuote component
              return (
                <InspirationalQuote
                  key={quote.id}
                  content={quote.content}
                  source={quote.source}
                />
              );
            })}
          </div>
        </Quotes>
      }
    </main>
  );
};

export default Application;
