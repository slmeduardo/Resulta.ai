import { render, screen } from '@testing-library/react'

import OddsCard from '.'

describe('<OddsCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<OddsCard />)

    expect(
      screen.getByRole('heading', { name: /OddsCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
