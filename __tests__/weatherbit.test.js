
import { weatherInfo } from '../src/client/js/weatherbit'

const getType = require('jest-get-type')

// The function exists and is defined.
test('function exists', () => {
    expect(weatherInfo).toBeDefined()
})

// The target variable is a function.
test('target is a function', () => {
    expect(typeof weatherInfo).toBe('function')
})
