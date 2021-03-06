import test from 'tape'

import validate from '../../src/validators/max'

test('max', (t) => {
  t.true(validate(undefined, 1), 'true when undefined')
  t.true(validate(null, 1), 'true when null')

  t.test('number', (t) => {
    t.true(validate(1, 2), 'true when less than max')
    t.true(validate(1, 1), 'true when equal to max')
    t.false(validate(1, 0), 'false when greater than max')
    t.end()
  })

  t.test('string', (t) => {
    t.true(validate('x', 2), 'true when length less than max')
    t.true(validate('x', 1), 'true when length equal to max')
    t.false(validate('x', 0), 'false when length greater than max')
    t.end()
  })

  t.test('array', (t) => {
    t.true(validate(['x'], 2), 'true when length less than max')
    t.true(validate(['x'], 1), 'true when length equal to max')
    t.false(validate(['x'], 0), 'false when length greater than max')
    t.end()
  })

  t.end()
})
