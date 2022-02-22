'use strict'

const classList = window.document.body.classList;
const $checkbox = window.document.getElementById('checkbox')

if (window.matchMedia('(prefers-color-scheme: dark)').matches)
  $checkbox.setAttribute('checked', true)

$checkbox.addEventListener('change', function() {
  if (this.checked) {
    classList.remove('light-theme')
    classList.add('dark-theme')
  } else {
    classList.remove('dark-theme')
    classList.add('light-theme')
  }
})