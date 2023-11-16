'use client'
import React, { useState } from 'react'

const Page = () => {
    /*
    1. State to display todo list
    2. Add todo
    3. Remove todo
    4. Mark todo as completed
    5. Filter todo list (all, completed, active)
    6. Persist todo list in local storage
    */

    const [todoList, setTodoList] = useState([])
    const [newTodo, setNewTodo] = useState<string>('')
    const [filter, setFilter] = useState<string>('all')

    const addTodo = () => {
        if (!newTodo) return
        const newItem = {
            id: todoList.length + 1,
            title: newTodo,
            completed: false,
        }
        setTodoList((prev) => [...prev, newItem])
        setNewTodo('');
    }

    const filtered = items.filter((item) => item.price > 100)
    const names = items.map((item) => item.name)

    const removeTodo = (idx: number) => {
        setTodoList(todoList.filter((todo) => todo?.id !==idx))
    }

    const completeTodo = (idx: number) => {
        const updatedTodoList = todoList.map((todo) => {
            if (todo?.id === idx) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })

        const sortedTodoList = updatedTodoList.sort((a, b) => {
            if (a.completed && !b.completed) return 1;
            if (!a.completed && b.completed) return -1;
            return a.id - b.id;
        })

        setTodoList(sortedTodoList)
    }

    const filterToList = todoList.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
    })

    const names = ['John', 'Alice', 'Bob', 'Eve'];
    const numbers = [4,7,8,6,2,1]
    console.log('🐙', names.sort((a, b) => b.localeCompare(a)));
    console.log('👻', numbers.filter((num) => num % 2 === 0));
    console.log('🐙', numbers.sort((a, b) => { if (a % 2 !== 0) { return -1 } }));


    return (
        <div>
          TODO
          <div>
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('active')}>Active</button>
            </div>
        <ul>
            {filterToList.map((todo, idx) => {
                return (
                    <li key={idx}>
                          <span
              style={{ textDecoration: todo?.completed ? 'line-through' : 'none' }}
            >
              {todo?.title}
            </span>
                        <button onClick={() => removeTodo(todo?.id)}>X</button>
                        <button onClick={() => completeTodo(todo?.id)}>  {todo?.completed ? 'Unmark' : 'Mark'}</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Page
