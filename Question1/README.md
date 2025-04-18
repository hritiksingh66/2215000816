# Average Calculator HTTP Microservice

A microservice that exposes a REST API to fetch numbers from a third-party server, maintain a window of unique numbers, and calculate their average.

## Features

- REST API endpoint `/numbers/{numberid}` that accepts qualified number IDs
- Fetches numbers from third-party APIs based on the ID type
- Maintains a configurable window of unique numbers
- Calculates the average of numbers in the window
- Responds with window state before and after the API call

## Supported Number IDs

- `p` - Prime numbers
- `f` - Fibonacci numbers
- `e` - Even numbers
- `r` - Random numbers

## Installation

```bash
# Install dependencies
npm install

# Start the server
npm start
```

## API Response Format

```json
{
  "windowPrevState": [2, 4, 6, 8],
  "windowCurrState": [2, 4, 6, 8, 10],
  "numbers": "[6, 8, 10]",
  "avg": 6.00
}
```

## Third-Party APIs

The microservice uses the following third-party APIs:

- Prime Numbers: http://20.244.56.144/evaluation-service/primes
- Fibonacci Numbers: http://20.244.56.144/evaluation-service/fibo
- Even Numbers: http://20.244.56.144/evaluation-service/even
- Random Numbers: http://20.244.56.144/evaluation-service/rand
