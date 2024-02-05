import React from 'react'
import Logo from './Logo'

function Login() {
    return (
        <div className='w-full flex justify-center pt-20'>
            <div className='bg-slate-700 w-[500px] rounded-2xl p-10'>
                <div className='w-full flex justify-center items-center'>
                    <Logo size={"2xl"} color={"white"} />
                </div>
                <form className="max-w-md mx-auto mt-8 text-white">
                    <div className="block mb-2">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-input mt-1 block w-full rounded-md p-1  outline-none bg-blue-100 text-black"
                        />
                    </div>

                    <div className="block mb-2">
                        <label>Password:</label>
                        <input
                            type="password"
                            className="form-input mt-1 block w-full rounded-md p-1  outline-none bg-blue-100 text-black"
                        />
                    </div>

                    <div className='w-full flex justify-center items-center p-4'>
                        <button
                            type="submit"
                            className="bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-all"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className='flex justify-center w-full text-white'>
                    <span>Don't have account?Sign up here</span>
                </div>
            </div>
        </div>
    )
}

export default Login