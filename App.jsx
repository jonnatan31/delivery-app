
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Login from './pages/Login'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">DeliveryApp</Link>
          <nav>
            <Link to="/login" className="mr-4">Entrar</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/restaurant/:id" element={<Restaurant/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </main>
    </div>
  )
}
