import request from 'superagent'

export function getTea () {
  request
    .get('/api/v1/tea')
    .end((err, res) => {
      if (err) console.log('whoops')
      else console.log(res)
    })
}
