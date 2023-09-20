const speedElement = document.getElementById('speed')
const goBtn = document.getElementById('go')
const speaker = document.getElementById('speaker')
const menu = document.getElementById('menu')
const closeBtn = document.getElementById('close')
const wordPlace = document.getElementById('word')

function choosedSpeed(value) {
    speedElement.value = value
}

goBtn.onclick = function reading () {
    let text = document.getElementById('TextForReading')
    let words = text.value.split(' ')
    let i = 0
    let timing = 60 / speedElement.value * 1000

    if (timing === Infinity) {
        timing = 500
    }

   let interval = setInterval(function () {
           if (i === words.length) {
               closeBtn.click()
           } else {
               wordPlace.textContent = words[i]
               i++
           }
       }, timing)

    menu.classList.toggle('hidden')
    speaker.classList.toggle('hidden')

    closeBtn.onclick = function () {
        wordPlace.textContent = ''
        words = []
        clearInterval(interval)
        speaker.classList.toggle('hidden')
        menu.classList.toggle('hidden')
    }
}