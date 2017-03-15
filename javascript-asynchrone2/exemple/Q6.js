const wait = time => new Promise(
  res => setTimeout(() => res(), time)
);

wait(200)
  .then(() => new Promise(res => res('foo')))
  .then(a => a)
  .then(b => console.log(b)) 
  .then(() => null)
  .then(c => console.log(c))
  .then(() => {throw new Error('foo');})
  .then(
    d => console.log(`d: ${ d }`),
    e => console.log(e))
  .then(f => console.log(`f: ${ f }`)) 
  .catch(e => console.log(e))
  .then(() => { throw new Error('bar'); })
  .then(g => console.log(`g: ${ g }`))
  .catch(h => console.log(h))
