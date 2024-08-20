import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../App.css'; // Import your CSS file
import flute from '../assets/flute.png'
import { motion } from 'framer-motion'; 
import background from '../assets/loginBack.png'
import API from '../helper';
import { toast } from 'react-toastify';
const Login = () => {
    const [data, setData] = useState({
        identifier: "",
        password: "",
    });

    const [msg,setMsg] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev, [name]: value
        }));
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
       try{
        const response = await fetch(API.login.url,{
            method : API.login.method,
            credentials : 'include',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })

        const responseData = await response.json();

        if(responseData.success){
            setMsg(responseData.message)
            toast.success(responseData.message)
            setTimeout(() => {
             navigate('/')
            },1000);
         }

         else if(responseData.error){
            toast.error(responseData.message)
         }
       }
       catch(error){
        setMsg(error.message)
        }
    }

    return (
        <motion.div 
        initial={{ opacity: 0, rotateY: 180 }}
        animate={{ opacity: 1, rotateY: 0 }}   
        exit={{ opacity: 0, rotateY: 180 }}    
        transition={{ duration: 0.6 }} 
        className="h-[622px] md:h-[800px]  py-6 flex justify-center items-center sm:py-12" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "
                >
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-12">
                    <div className="max-w-md mx-auto">
                        <div className='relative'>
                            <h1 className="text-2xl font-semibold abril-fatface-regular">Login</h1>
                            <div className='absolute left-[55%] top-4 w-8 h-3'><img src={flute} className='rotate-[44deg]'/></div>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 md:w-[300px]">
                             <form onSubmit={handleSubmit}>
                             <div className="relative">
                                    <input
                                        autoComplete="off"
                                        id="identifier"
                                        name="identifier"
                                        type="text"
                                        value={data?.identifier}
                                        onChange={handleChange}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600 text-sm p-2 m-1"
                                        placeholder="Email address" 
                                    />
                                    <label
                                        htmlFor="identifier"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        Email/Phone no
                                    </label>
                                </div>
                                <div className="relative mt-3">
                                    <input
                                        autoComplete="off"
                                        id="password"
                                        name="password"
                                        value={data?.password}
                                        onChange={handleChange}
                                        type="password"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600 text-sm p-2 m-1"
                                        placeholder="Password" 
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        Password
                                    </label>
                                </div>
                                <span className='text-sm ml-28 m-1 text-slate-400'>Create an account? <Link to={'/register'} className='text-green-800 hover:underline underline-offset-2'>Register</Link></span>
                                <div className="relative mt-3">
                                    <button className="bg-green-500 text-white rounded-md md:mt-6 px-3 py-1 hover:bg-black hover:scale-110 transition-all duration-500">Login</button>
                                </div>
                             </form>
                             {msg ? <span className={`${msg=='login successfully' ? 'text-green-500' : 'text-red-500 '} text-sm pt-4`}>*{msg}</span> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Login;
