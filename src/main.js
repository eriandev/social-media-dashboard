'use strict'

const checkbox = document.getElementById('checkbox')

if (window.matchMedia('(prefers-color-scheme: dark)').matches)
  checkbox.setAttribute('checked', true)

checkbox.addEventListener('change', function(event) {
  if (this.checked) {
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
  }
})