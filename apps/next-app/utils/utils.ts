/*
TYPESCRIPT GENERICS
*/
export const convertToArray = <T>(item: T): T[] => [item]
convertToArray(13)

export const getIndexOf = <T>(array: T[], item: T): number => array.indexOf(item)
console.log('🐙', getIndexOf([1, 2, 3], 2))

export const createArrayPair = <T, U>(item1: T, item2: U): [T, U] => [item1, item2]
