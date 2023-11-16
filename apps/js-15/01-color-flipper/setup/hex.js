const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    const randomHex = getRandomHex()
    console.log('🐙', randomHex)
    color.textContent = randomHex
    document.body.style.backgroundColor = randomHex
})

const getRandomHex = () => {
    let randomHex = '#'
    for (let i = 0; i < 6; i++){
        const randomItem = hex[Math.floor(Math.random() * hex.length)]
        randomHex += randomItem
    }

    return randomHex
}