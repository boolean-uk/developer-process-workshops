const { a, b, c, d } = require('../src/index.js')

describe(':', () => {
    it('One character in input and not repeated', () => {
        expect(a).toEqual({ z: 1 })
    })

    it('One character in input and repeated', () => {
        expect(b).toEqual({ d: 10 })
    })

    it('Multiple characters in input but only one with maximum count', () => {
        expect(c).toEqual({ z: 8 })
    })

    it('Multiple characters in input and many with maximum counts', () => {
        expect(d).toEqual({ m: 10 })
    })
})
