const { hash } = window.location

const secret = atob(hash.replace('#', ''))

if (secret) {
  document.getElementById('form-panel').classList.add('hide')
  document.getElementById('encoded-panel').classList.remove('hide')

  document.getElementById('heading').innerHTML = secret
}

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault()

  document.getElementById('form-panel').classList.add('hide')
  document.getElementById('share-panel').classList.remove('hide')

  const input = document.getElementById('form-input')
  const encrypted = btoa(input.value)

  const share = document.getElementById('link-share-input')
  share.value = `${window.location}#${encrypted}`
  share.select()
})
