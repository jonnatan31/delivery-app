
import React, { useState } from 'react'
import axios from 'axios'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e) =>{
    e.preventDefault()
    try{
      const res = await axios.post((import.meta.env.VITE_API_URL || 'http://localhost:4000/api') + '/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      alert('Logado!')
    }catch(err){
      alert('Erro: ' + (err.response?.data?.error || err.message))
    }
  }

  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Entrar</h2>
      <input className="w-full p-2 border mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="w-full p-2 border mb-2" placeholder="Senha" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="btn">Entrar</button>
    </form>
  )
}
