import { useState } from "react"

const Login = () => {


  return (
    <div className='h-80 flex justify-center items-center'>
      <form className="flex flex-col gap-5 max-w-md mx-auto" onSubmit={handleSumit}>
        <h1 className="text-2xl font-bold">Login</h1>
        <input className="bg-gray-200 placeholder-slate-500 px-4 py-1 rounded-xl" placeholder="email" type="text" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="bg-gray-200 placeholder-slate-500 px-4 py-1 rounded-xl" placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="bg-black text-white font-bold rounded-xl px-4 py-1 hover:ring-2 ring-black">Login</button>
      </form>
    </div>
  )
}
export default Login