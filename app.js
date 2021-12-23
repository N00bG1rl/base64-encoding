document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault()

  const input = document.getElementById('form-input')
  const encrypted = btoa(input.value)

  const share = document.getElementById('link-share-input')
  share.value = `${window.location}#${encrypted}`
  share.select()
})
