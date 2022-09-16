import { render, screen } from '@testing-library/react'

import Nav from '.'

describe('<Nav />', () => {
  it('should render the heading', () => {
    const { container } = render(<Nav />)

    expect(screen.getByRole('heading', { name: /Nav/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
