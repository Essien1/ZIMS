import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {createUser} = UserAuth();
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
            e.preventDefault()
            setError('')
            try{
                 await createUser(email,password)
                 navigate ('/dashboard')
            } catch(e){
                setError(e.message)
                alert(e.message)
            }

    }
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
            <p className='py-2'>Already have an account yet? <Link to='/admin' className='underline'>Login</Link></p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password'/>
            </div>
            <button className='text-white border border-indigo-500  bg-indigo-600 hover:bg-indigo-500 w-full p-4 my-2 '>Sign In</button>
        </form>
    </div>
  )
}

export default Signup