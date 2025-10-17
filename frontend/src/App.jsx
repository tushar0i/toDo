import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'
import { useEffect, useState } from 'react'

function App() {
    const [todos, setTodos] = useState([])
    // fetch("http://localhost:3000/todo") // we can't make App function async that's why we have to use .then 
    // .then(async (response)=> {
    //     const data = await response.json()   
    //     setTodos(data.todos)    
    // }) 
    // this is not the right way to fetch data from backend 
    // a infinite loop of fetch request's

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/todo")
            const data = await response.json()
            setTodos(data.todos)
        }
        fetchData()
    }, []) // The empty array [] ensures this effect runs only once

    return (
        <div>
            <CreateTodo></CreateTodo>
            <Todos todos={todos}></Todos>
        </div>
    )
}

export default App
