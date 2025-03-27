import { render, screen } from '@testing-library/react'

import App from './App'

test('Work App Component without error', () => {
  render(<App />)

  expect(screen.getByText('Hello.')).toBeInTheDocument()
})
