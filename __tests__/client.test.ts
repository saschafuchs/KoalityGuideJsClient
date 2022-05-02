import Client from '../src/Client'

describe('test client', () => {

  it('check the client now', () => {
    const client = new Client()
   expect(client).toBeDefined()
  })
})
