let url = document.baseURI
let counter = 0

// enable dark mode
darkmoding()

function darkmoding() {
  if (url.match('edit')[0] == 'edit') {
    getbody = document.getElementsByTagName('body')
    getbody[0].className = 'namespace-tracks controller-exercises action-edit theme-dark user-signed_in'
  } else {
    getbody = document.getElementsByTagName('body')
    getbody[0].className = 'namespace- controller-premium action-show theme-dark user-signed_in'
  }

}

function detecting_url_changes() {
  counter += url.length
  if (counter > url.length || counter < url.length) {
    darkmoding()
  } else if (counter == url.length) {
    console.log('not changed')
  }
}

setInterval(detecting_url_changes, 4000)

