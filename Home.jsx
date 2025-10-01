
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home(){
  const [restaurants, setRestaurants] = useState([])
  useEffect(()=>{
    axios.get((import.meta.env.VITE_API_URL || 'http://localhost:4000/api') + '/restaurants')
      .then(r => setRestaurants(r.data))
      .catch(e => console.error(e))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Restaurantes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map(r => (
          <div key={r.id} className="bg-white p-4 rounded shadow">
            {r.image && <img src={(import.meta.env.VITE_API_URL || 'http://localhost:4000/api') + r.image} alt="" className="h-40 w-full object-cover rounded" />}
            <h2 className="mt-2 font-semibold">{r.name}</h2>
            <p className="text-sm text-gray-600">{r.description}</p>
            <Link to={`/restaurant/${r.id}`} className="inline-block mt-2 text-blue-600">Abrir</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
