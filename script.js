const array = ["red", "green", "blue", "gray", "indigo", "aqua", "pink", "black"]
function rand(params) {
    let i = Math.round(Math.random() * (array.length - 1))
    return array[i]
}

const items = document.querySelectorAll('.item')
items.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = rand()
    })
})