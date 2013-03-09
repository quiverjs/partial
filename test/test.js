
var assert = require('assert')
var partial = require('../lib/partial').partial
var partialArgs = require('../lib/partial').partialArgs

var foo = function(a, b, c) {
  assert.equal(a, 'a')
  assert.equal(b, 'b')
  assert.equal(c, 'c')
}

partial(foo, 'a')('b', 'c')
partial(foo, 'a', 'b')('c')
partial(foo, 'a', 'b', 'c')()
partial(foo, undefined, 'b')('a', 'c')
partial(foo, 'a', undefined, 'c')('b')

var bar = function(a, b, args) {
  assert.equal(a, 'a')
  assert.equal(b, 'b')
  assert.equal(args.c, 'c')
  assert.equal(args.d, 'd')
}

partialArgs(bar, { c: 'c' })('a', 'b', { d: 'd' })
partialArgs(bar, { c: 'old', d: 'd' })('a', 'b', { c: 'c' })
partialArgs(bar, { c: 'c', d: 'd' })('a', 'b', { })
