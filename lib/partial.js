
var partial = function(fn) {
  var partialArgs = Array.prototype.slice.call(arguments)
  partialArgs.shift()
  var partialArgsLength = partialArgs.length

  return function() {
    var newArgs = Array.prototype.slice.call(arguments)

    var allArgs = partialArgs.concat()
    var i=0
    newArgs.forEach(function(arg) {
      while(i < partialArgsLength) {
        if(allArgs[i] === undefined) {
          allArgs[i] = arg
          i++
          return
        }
        i++
      }
      allArgs.push(arg)
    })
    return fn.apply(fn, allArgs)
  }
}

var partialArgs = function(fn, options) {
  return function() {
    var allArgs = Array.prototype.slice.call(arguments)
    var newOptions = allArgs.pop()
    Object.keys(newOptions).forEach(function(key) {
      options[key] = newOptions[key]
    })
    allArgs.push(options)
    fn.apply(fn, allArgs)
  }
}

module.exports = {
  partial: partial,
  partialArgs: partialArgs
}