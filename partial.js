
module.exports = function(fn) {
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