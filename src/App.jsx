import { useState } from 'react'
import { getInitialQuoteState } from './utils/quoteState'

const initialQuoteState = getInitialQuoteState()

function App() {
  const [{ randomQuote }] = useState(initialQuoteState)

  const { text, author, group } = randomQuote;
  const quoteType = group === 1
    ? 'Inspiracional'
    : group === 2
      ? 'Trading'
      : 'Tipo no clasificado';

  return (
    <main>
      <h4 id="quote-text">"{text}"</h4>
      <p id="quote-author">{author}</p>
      <p id="quote-type">({quoteType})</p>
    </main>
  )
}

export default App
