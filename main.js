let url = document.baseURI
let counter = 0

// enable dark mode
darkmoding()

function darkmoding() {
  // enable dark mode
  getbody = document.getElementsByTagName('body')
  getbody[0].className = 'namespace- controller-premium action-show theme-dark user-signed_in'
  // disable donating
  getdonate = document.getElementById('site-footer')
  getdonate.style = 'display: none;'
}

function detecting_url_changes() {
  counter += url.length
  if (counter > url.length || counter < url.length) {
    darkmoding()
  } else if (counter == url.length) {
    console.log('url not changed')
  }
}

setInterval(detecting_url_changes, 4000)
