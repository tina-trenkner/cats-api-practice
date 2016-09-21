const request = require('superagent')

document.addEventListener('DOMContentLoaded', () => {
  const url = 'http://thecatapi.com/api/images/get'
  let html = "Oh noes! An error!"
  request
  .get(url)
  .query({api_key: "MTIwMjc2"})
  .query({format: 'html'})
  .query({size: 'med'})
  .query({category: "ties"})
  .end((err, res) => {
    if (!err) {
      html = res.text
    }
    document.getElementById('cats').innerHTML = html
  })
})
