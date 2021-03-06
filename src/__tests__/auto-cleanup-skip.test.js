import Comp from './fixtures/Comp'

describe('auto-cleanup-skip', () => {
  let render

  beforeAll(() => {
    process.env.STL_SKIP_AUTO_CLEANUP = 'true'
    const stl = require('..')
    render = stl.render
  })

  // This one verifies that if STL_SKIP_AUTO_CLEANUP is set
  // then we DON'T auto-wire up the afterEach for folks
  test('first', () => {
    render(Comp, { props: { name: 'world' } })
  })

  test('second', () => {
    expect(document.body.innerHTML).toMatchSnapshot()
  })
})
