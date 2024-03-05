import { useState } from "react";

const Register = () => {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch('http://localhost:8000',{
      method: 'POST',
      body: JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
  }

  return (
    <div className='h-96 flex justify-center items-center'>
      <form className="flex flex-col gap-5 max-w-md mx-auto">
        <h1 className="text-2xl font-bold">Register</h1>
        <input className="bg-gray-200 placeholder-slate-500 px-4 py-1 rounded-xl" placeholder="name" type="text" value={name} onChange={e=>setName(e.target.value)} />
        <input className="bg-gray-200 placeholder-slate-500 px-4 py-1 rounded-xl" placeholder="email" type="text" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="bg-gray-200 placeholder-slate-500 px-4 py-1 rounded-xl" placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="bg-black text-white font-bold rounded-xl px-4 py-1 hover:ring-2 ring-black">Register</button>
      </form>
    </div>
  )
}
export default Register