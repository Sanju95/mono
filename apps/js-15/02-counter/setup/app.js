const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')

let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const element = e.currentTarget.classList
        if (element.contains('decrease')) count--
        if (element.contains('increase')) count++
        if (element.contains('reset')) count = 0

        if (count > 0) value.style.color = 'green'
        if (count < 0) value.style.color = 'red'
        if (count === 0) value.style.color = '#222'
        value.textContent = count
    })
})


