const speedElement = document.getElementById('speed')
const goBtn = document.getElementById('go')
const speaker = document.getElementById('speaker')
const closeBtn = document.getElementById('close')
const wordPlace = document.getElementById('word')

console.log(wordPlace)

let timeCode = 500

function choosedSpeed(value) {
    speedElement.value = value
}

goBtn.onclick = function reading () {
    let text = document.getElementById('TextForReading')
    let words = text.value.split(' ')
    let i = 0
    let timing = 60 / speedElement.value * 1000

    if (timing == Infinity) {
        timing = 500
    }

    setInterval(function () {
        if (i == words.length) {
            words = []
            return
        } else {
            wordPlace.textContent = words[i]
            i++
        }
        console.log(i)
    }, timing)

    speaker.classList.toggle('hidden')

    closeBtn.onclick = function () {
        speaker.classList.toggle('hidden')
    }
}