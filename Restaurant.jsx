
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Restaurant(){
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null)

  useEffect(()=>{
    axios.get((import.meta.env.VITE_API_URL || 'http://localhost:4000/api') + `/restaurants/${id}`)
      .then(r => setRestaurant(r.data))
      .catch(console.error)
  }, [id])

  if(!restaurant) return <div>Carregando...</div>
  return (
    <div>
      <h1 className="text-2xl font-bold">{restaurant.name}</h1>
      <p className="text-sm text-gray-600">{restaurant.description}</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {restaurant.menus.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{item.name} — R$ {item.price.toFixed(2)}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <button className="mt-2 btn">Adicionar</button>
          </div>
        ))}
      </div>
    </div>
  )
}
