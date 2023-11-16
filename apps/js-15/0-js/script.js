// JS Array Methods
/*
toString()
split()
join()
concat()
splice()
slice()
indexOf()
lastIndexOf()
forEach()
map()
filter()
reduce()
some()
every()
flat()
flatMap()
find()
findIndex()
sort()
pop()
push()
shift()
unshift()
reverse()
isArray()
valueOf()
toLocaleString()
toSource()

*/

console.log('JS ARRAY METHODS')

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const stringArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const mixedArray = [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9]
const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const objectArray = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }, { id: 3, name: 'three' }]
const fullNameArray = ['John Doe', 'Billy Smith', 'Jane Dane']
const randomeArray = [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9, { id: 1, name: 'one' }, [1, 2, 3]]
const randomString = 'randomstring'
const emptyArray = []

// toString()
console.log('toString()', numberArray.toString())

// split() reverse() join()
console.log('split()', randomString.split('').reverse().join(''))

// concat()
console.log('concat()', numberArray.concat(randomString))

// splice()
console.log('splice()', numberArray.splice(2, 4))
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

// slice()
console.log('slice()', numberArray.slice(1, 5))

// indexOf()
console.log('indexOf()', numberArray.indexOf(5))

// lastIndexOf()
console.log('lastIndexOf()', numberArray.lastIndexOf(5))

// forEach()
objectArray.forEach((item, index) => {
    console.log('forEach()', item.name, index)
})

// map()
const mappedArray = objectArray.map((item, index) => {
    return item.name
})
console.log('map()', mappedArray)

// filter()
const filteredArray = objectArray.filter((item, index) => {
    return item.id > 1
})
console.log('filter()', filteredArray)

// reduce()
const reducedArray = numberArray.reduce((total, current) => {
    return total + current
})
console.log('reduce()', reducedArray)

// some()
const someArray = numberArray.some((item, index) => {
    return item > 5
})
console.log('some()', someArray)

// every()
const everyArray = numberArray.every((item, index) => {
    return item > 5
})
console.log('every()', everyArray)

// flat()
const flatArray = nestedArray.flat()
console.log('flat()', flatArray)

// flatMap()
const flatMapArray = nestedArray.flatMap((item, index) => {
    return item
})
console.log('flatMap()', flatMapArray)

// find()
const findArray = objectArray.find((item, index) => {
    return item.id === 2
})
console.log('find()', findArray)

// findIndex()
const findIndexArray = objectArray.findIndex((item, index) => {
    return item.id === 2
})
console.log('findIndex()', findIndexArray)

// sort()
const sortArray = numberArray.sort((a, b) => {
    return b - a
})
console.log('sort()', sortArray)
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

// pop()
console.log('pop()', numberArray.pop())
console.log(numberArray)

// push()
console.log('push()', numberArray.push(9))
console.log(numberArray)

// shift()
console.log('shift()', numberArray.shift())
console.log(numberArray)

// unshift()
console.log('unshift()', numberArray.unshift(1))
console.log(numberArray)

// reverse()
console.log('reverse()', numberArray.reverse())
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

// isArray()
console.log('isArray()', Array.isArray(numberArray))

// valueOf()
console.log('valueOf()', numberArray.valueOf())

// toLocaleString()
console.log('toLocaleString()', numberArray.toLocaleString())

//Remove Duplicates
function removeDuplicates(array) {
    return array.filter((item, idx) => array.indexOf(item) === idx)
}

function unique(array) {
    return [...new Set(array)]
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]