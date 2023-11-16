const person = "John Doe";
type Person = typeof person;

const person2 = {
    name: "John Doe",
    age: 20,
}
type Person2 = typeof person2;
type Person2Keys = keyof typeof person2;

const func = () => {
    const value = 10;
    return value
}

type Func = ReturnType<typeof func>

const func2 = async () => {
    const value = 10;
    return value
}

type Func2 = Awaited<ReturnType<typeof func2>>

// DISPLAY ALL NESTED TYPES
type Pretify<T> = {
    [K in keyof T]: T[K]
} & {}

interface MainType {
    name: string;
    age: number;
}

type NestedType = MainType & {
    isDeveloper: boolean
}

type Check = Pretify<NestedType>

type FullType = {
    title: string;
    description: string;
    createdAt: Date;
}

//OMIT
type OmittedType = Omit<FullType, 'createdAt'>

//PICK
type PickedType = Pick<FullType, 'title' | 'description'>

// PARTIAL | REQUIRED
type PartialType = Partial<FullType>
type RequiredType = Required<FullType>

type Shapes = {
    kind: "circle";
    radius: number;
} | {
    kind: "square";
    sideLength: number;
} | {
    kind: "triangle";
    sideLength: number;
}

// EXCLUDE
type ExcludeShape = Exclude<Shapes, { kind: "circle" }>

//PARTIAL
type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
    return { ...todo, fieldsToUpdate }
}

const initialTodo: Todo = {
    title: "Learn TypeScript",
    description: "Learn TypeScript, it is awesome!",
    completed: false,
}

const updatedTodo = updateTodo(initialTodo, { description: "Lerning is painful" })

//as const
const routes = {
    home: "/",
    admin: "/admin",
    users: "/users",
    newUser: "/users/new",
} as const

type Routes = (typeof routes)[keyof typeof routes]

const goToRoute = (route: Routes) => { }

goToRoute(routes.admin)

//GENERICS
type MyGeneric<T> = {
    data: T;
}

const myGenericString: MyGeneric<string> = {
    data: "Hello World",
}

const myGenericNumber: MyGeneric<{name: string}> = {
    data: {name: "John Doe"},
}

//GENERICS WITH EXTENDS
type MyGeneric2<T extends string | number> = {
    data: T;
}

const myGenericString2: MyGeneric2<string> = {
    data: "Hello World",
}

const myGenericNumber2: MyGeneric2<number> = {
    data: 10,
}

//GENERICS WITH ARRAY
type MyGeneric3<T> = {
    data: T[];
}

const myGenericString3: MyGeneric3<string> = {
    data: ["Hello World"],
}

//GENERICS WITH OBJECT
type MyGeneric4<T extends { name: string }> = {
    data: T;
}

const myGenericString4: MyGeneric4<{ name: string }> = {
    data: { name: "John Doe" },
}

//GENERICS WITH FUNCTION
const makeFetch = <T>(url: string): Promise<T> => {
    return fetch(url).then((res) => res.json())
}

makeFetch<{ firstName: string, lastName: string }>("https://jsonplaceholder.typicode.com/users").then((data) => console.log(data))

const set = new Set<number>()
set.add(1)
set.add('abc')

//////////////////////
const addIdToObject = <T>(obj: T): T & {id: number} => {
    return {
        ...obj,
        id: 123,
    }
}
const result = addIdToObject<{ firstName: string, lastName: string }>({ firstName: "John", lastName: "Doe" })

const createArrayPair = <T, K>(a: T, b: K): [T, K] => [a, b]

createArrayPair<string, number>("a", 1)

//////////////////////
const typedObjectKeys = <T extends {}>(obj: T): Array<keyof T> => Object.keys(obj) as Array<keyof T>

const result2 = typedObjectKeys({ name: "John Doe", age: 20 })

//////////////////////
const getValue = <T, K extends keyof T>(obj: T, key: K) => {
    if (key === 'bad') throw Error('Bad key passed')

    return obj[key]
}

const result3 = getValue({ name: "John Doe", age: 20 }, 'age')
console.log(result3) //



