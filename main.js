let url = document.baseURI
let getbody = document.getElementsByTagName('body')
let counter = 0

// enable dark mode
darkmoding()


function darkmoding() {

  try {
    if (url.match('edit')[0] == 'edit') {
      getbody[0].className = 'namespace-tracks controller-exercises action-edit theme-dark user-signed_in'
    }
  } catch {
    getbody[0].className = 'namespace- controller-premium action-show theme-dark user-signed_in'
  }

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
