import { render, screen } from '@testing-library/react'

import StreamsCard from '.'

describe('<StreamsCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<StreamsCard />)

    expect(screen.getByRole('heading', { name: /StreamsCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
