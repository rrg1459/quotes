import quotesJsonArray from '../quotes/quotesData'

export function getInitialQuoteState() {
  const storedIds = JSON.parse(localStorage.getItem('ids'))
  const lengthIds = quotesJsonArray.length;

  const parsedIds = storedIds === null || lengthIds === storedIds.length ? [] : storedIds

  if (storedIds.length === lengthIds) {
    localStorage.removeItem('ids')
  }

  const ids = quotesJsonArray
    .map((quote) => quote.id)
    .filter((id) => !parsedIds.includes(id))

  const randomId = ids[Math.floor(Math.random() * ids.length)]

  const randomIndex = Math.floor(Math.random() * quotesJsonArray.length)

  const randomQuote =
    quotesJsonArray.find((quote) => quote.id === randomId) ?? quotesJsonArray[randomIndex]
  const nextIds =
    randomId === undefined || parsedIds.includes(randomId)
      ? parsedIds
      : [...parsedIds, randomId]

  const sortedNextIds = [...nextIds].sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }))

  localStorage.setItem('ids', JSON.stringify(sortedNextIds))

  console.log('quoteState randomQuote-->: ', randomQuote);

  return { randomQuote }
}