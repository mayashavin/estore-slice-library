export const convert = async (value, _currency = 'USD') => {
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${_currency}`)
  const data = await response.json()

  if (!data.rates) return { _currency: value }

  const conversion = {}

  console.log(data.rates)

  for (let key in data.rates) {
    const rate  = data.rates[key]

    conversion[key] = rate * value
  }
  
  return conversion
}