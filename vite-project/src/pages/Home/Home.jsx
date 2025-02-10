import React from 'react'
import TodoApp from '../../components/TodoApp/TodoApp'
import './Home.scss'

const Home = () => {
  return (
    <main className='home-container'>
        <h1>Welcome to the Todo App</h1>
        <TodoApp />
    </main>
  )
}

export default Home