import { render, screen } from '@testing-library/react'

import MatchOverveview from '.'

describe('<MatchOverveview />', () => {
  it('should render the heading', () => {
    const { container } = render(<MatchOverveview />)

    expect(screen.getByRole('heading', { name: /MatchOverveview/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
