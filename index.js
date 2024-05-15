let darkMode = document.querySelector('.dark-mode')
console.log(darkMode)
darkMode.addEventListener(`click`, activateDarkMode)


function activateDarkMode() {
    prompt (`Dark Mode`)
}


function timeAndDate () {
    const date = new Date()
    let currentMonth = date.getMonth() + 1
    let currentDay = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    const dateText = document.querySelector('#date-text')
    dateText.textContent = `${currentMonth}/${currentDay}`
    const clockText = document.querySelector('#clock-text')
    clockText.textContent = `${hours}:${minutes}:${seconds}`


}

timeAndDate()
setInterval (timeAndDate, 1000)

