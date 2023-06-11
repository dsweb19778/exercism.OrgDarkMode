let url = document.baseURI
let counter = 0

darkmoding()

function darkmoding() {
  getbody = document.getElementsByTagName('body')
  getbody[0].className = 'namespace- controller-premium action-show theme-dark user-signed_in'
}

function detecting_url_changes() {
  counter += url.length
  if (counter > url.length || counter < url.length) {
    darkmoding()
  } else if (counter == url.length) {
    console.log('url not changed')
  }
}

setInterval(detecting_url_changes, 2000)
