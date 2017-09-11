const log = console.log

functon timeIt(fn){
  return function () {
    let start = (new Date()).getTime()
    fn()
    let end = Date.now()
    log('', end - start)
  }
}