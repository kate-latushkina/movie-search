import arrayLetters from './button'

function clickShift(searchButton, keyCode, lang) {
  for (let i = 0; i < searchButton.length; i += 1) {
    if (keyCode === 'ShiftLeft') {
      document.querySelector('.ShiftLeft').classList.add('button-active')
    }
    if (keyCode === 'ShiftRight') {
      document.querySelector('.ShiftRight').classList.add('button-active')
    }
    searchButton[i].innerHTML = arrayLetters[i].shiftText[lang]
  }
}

export default clickShift