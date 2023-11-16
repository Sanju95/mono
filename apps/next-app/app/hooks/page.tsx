'use client'
import React, { useEffect, useLayoutEffect, useState, useContext, createContext, ReactNode, useRef, useMemo } from 'react'

const foods = ['Pizza', 'Burger', 'Ice Cream', 'Fries', 'Sandwich']
const favFood = createContext("")

const Hooks = () => {

    const [count, setCount] = useState(0)
    const [input, setInput] = useState('')

    const buttonRef = useRef()

    const increment = () => {
        setCount((preCount) => preCount + 1)
        setCount((preCount) => preCount + 1)
    }

    const calculateRandom = () => Math.random() * 200
    const randomCalculation = useMemo(() => { return calculateRandom() }, [])

    useEffect(() => {
        document.title = `You clicked ${count} times`

        // const incrementer = setInterval(() => { setCount((prevCount) => prevCount + 1) }, 1000)

        // return () => {
        //     clearInterval(incrementer)
        // }
        console.log('🐙', buttonRef.current.offsetHeight)
    }, [])

    useLayoutEffect(() => {
        if(count === 0) {
            setCount(Math.random() * 2)
        }
    })


    return (
      <>
        <div>
            <h1>useState</h1>
            <div>{count}</div>
            <button onClick={increment}>Increment Count</button>
            </div>

            <div>
                <h1>useEffect 🔥</h1>
                <h2>{input}</h2>
                <input ref={buttonRef} onChange={(e) => setInput(e.target.value)}  />
            </div>
            <div>
                <h1>{randomCalculation}</h1>
            </div>
            <div>
                <h1>{calculateRandom()}</h1>
            </div>
            <div>
                <h1></h1>
            </div>
      </>
  )
}

export default Hooks
