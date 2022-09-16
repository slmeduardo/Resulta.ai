import { render, screen } from '@testing-library/react'

import TopImg from '.'

describe('<TopImg />', () => {
  it('should render the heading', () => {
    const { container } = render(<TopImg />)

    expect(screen.getByRole('heading', { name: /TopImg/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
