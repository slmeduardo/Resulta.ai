import { render, screen } from '@testing-library/react'

import Time from '.'

describe('<Time />', () => {
  it('should render the heading', () => {
    const { container } = render(<Time />)

    expect(screen.getByRole('heading', { name: /Time/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
