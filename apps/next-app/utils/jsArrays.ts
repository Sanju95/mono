const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

// Filter
const filteredItems = items.filter((item) => item.price <= 100)

// Map
const itemNames = items.map((item) => item.name)

// Find
const foundItem = items.find((item) => item.name === 'Book')

// ForEach
items.forEach((item) => console.log(item.name))

// Some
const hasInexpensiveItems = items.some((item) => item.price <= 100)

// Every
const hasAllInexpensiveItems = items.every((item) => item.price <= 100)

// Reduce
const total = items.reduce((currentTotal, item) => item.price + currentTotal, 0)

// Includes
const includesTwo = [1, 2, 3].includes(2)



