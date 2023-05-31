const btn = document.querySelector('button')

let songs = ["Lover's Paradis", "Snoop Heaven", "You're the Best", "What's love got to do!", "Moonriver"]

let randomIndex = Math.floor(Math.random() * songs.length)

const clickHandler = () => alert(`You should listen to ${songs[randomIndex]}`)

btn.addEventListener('click', clickHandler)