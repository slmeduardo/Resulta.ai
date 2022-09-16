import { render, screen } from '@testing-library/react'

import MatchBg from '.'

describe('<MatchBg />', () => {
  it('should render the heading', () => {
    const { container } = render(<MatchBg />)

    expect(screen.getByRole('heading', { name: /MatchBg/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
