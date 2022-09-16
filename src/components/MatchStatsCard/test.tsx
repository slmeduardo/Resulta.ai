import { render, screen } from '@testing-library/react'

import MatchStatsCard from '.'

describe('<MatchStatsCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<MatchStatsCard />)

    expect(screen.getByRole('heading', { name: /MatchStatsCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
