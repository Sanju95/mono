"use client"
import React, { useState, useEffect } from 'react'

type Pokemons = {
  name: string
  url: string
}[]

type PokemonType<T> = {
  items: T[]
  onClick: (item: T) => void
}

const List = <T extends {}>({ items, onClick}: PokemonType<T>) => {

  return (
    <div>
      {items.map((item, idx) => (
        <button key={idx} onClick={() => onClick(item)}>{item}</button>
      ))}
    </div>
  )
}
const PlaygroundPage = () => {
  const [age, setAge] = useState<number | null>(0)
  const [genPokemons, setgenPokemons] = useState<Pokemons>([]);



  const fetchFirstGenPokemons = async () => {
    try{
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      if(!res.ok) throw new Error('Network response was not ok!')
      const data = await res.json();
      setgenPokemons(data.results)
      return res.json();
    } catch (e) {
      console.log('🌈',e)
    }


  }
  const fetchFirstGenPokemons2 = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => {
      res.json().then((data) => console.log(data))
    })
  }

  useEffect(() => {
    fetchFirstGenPokemons()
    setTimeout(() => {
      setAge(37)
    },3000)
    // setAge(37)
    return () => {
      setAge(null)
    }

  }, [])
  console.log('🛑🦄💩', genPokemons)
  return (
    <>
    <div>{age}</div>
      <ul>{genPokemons && genPokemons.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)}</ul>
      <List items={['a', 'b', 'c']} onClick={(item) => console.log(item)} />
    </>
  )
}

export default PlaygroundPage