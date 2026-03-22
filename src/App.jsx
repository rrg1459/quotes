import { useState } from 'react'
import { getInitialQuoteState } from './utils/quoteState'

const initialQuoteState = getInitialQuoteState()

function App() {
  const [{ randomQuote }] = useState(initialQuoteState)

  const { text, author } = randomQuote;

  return (
    <>
      <p>Texto: {text}</p>
      <p>Autor: {author}</p>
    </>
  )
}

export default App
