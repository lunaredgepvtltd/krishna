import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import flute from '../assets/flute.png';
import API from '../helper';
import { motion } from 'framer-motion'; 
import background from '../assets/loginBack.png'
import { toast } from 'react-toastify';
const Register = () => {
    const [data, setData] = useState({
        username: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate()
    const [msg,setMsg] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev, [name]: value
        }));
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        try{
         const response = await fetch(API.register.url,{
            method : API.register.method,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
         })

         const responseData = await response.json();
         
         if(responseData.success){
            toast.success(responseData.message)
            setTimeout(() => {
             navigate('/login')
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
        className="h-[650px] md:h-[800px] pt-12 md:py-6 flex justify-center items-center sm:py-20"  style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="relative py-3 max-w-full sm:max-w-xl sm:mx-auto mx-5">
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-3 md:py-10 bg-white shadow-lg sm:rounded-3xl md:p-14">
                    <div className="max-w-md mx-auto">
                        <div className='relative'>
                            <h1 className="text-2xl font-semibold abril-fatface-regular">Register</h1>
                            <div className='absolute left-[55%] top-4 w-8 h-3'>
                                <img src={flute} className='rotate-[44deg]' alt="Flute" />
                            </div>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-2 md:py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 md:w-[300px]">

                              <form onSubmit={handleSubmit}>
                                   {/* ***username***  */}
                                <div className="relative mt-4 ">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={data.username}
                                        onChange={handleChange}
                                        className="peer placeholder-transparent h-15 w-[93%] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600 text-sm p-2 m-1"
                                        placeholder="Username" />
                                    <label htmlFor="username"
                                         className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                </div>

                                {/* ***phoneNumber*** */}
                                <div className="relative mt-4">
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="number"
                                        value={data.phoneNumber}
                                        onChange={handleChange}
                                       className="peer placeholder-transparent h-15 w-[93%] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600 text-sm p-2 m-1"
                                        placeholder="Phone Number" />
                                    <label htmlFor="phoneNumber"
                                         className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone Number</label>
                                </div>

                                {/* ***email*** */}
                                <div className="relative mt-4">
                                    <input
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        type="email"
                                        onChange={handleChange}
                                       className="peer placeholder-transparent  h-15 w-[93%] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600 text-sm p-2 m-1"
                                        placeholder="Email Address" />
                                    <label htmlFor="email"
                                         className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        Email Address
                                    </label>
                                </div>

                                {/* ***password*** */}
                                <div className="relative mt-4">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                        value={data.password}
                                        className="peer placeholder-transparent  h-15 w-[93%] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600 text-sm p-2 m-1"
                                        placeholder="Password" />
                                    <label htmlFor="password"
                                         className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>

                                {/* ***confirm-password*** */}
                                <div className="relative mt-4">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        onChange={handleChange}
                                        value={data.confirmPassword}
                                        className="peer placeholder-transparent  h-15 w-[93%] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600 text-sm p-2 m-1"
                                        placeholder="Confirm Password" />
                                    <label htmlFor="confirmPassword"
                                         className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        Confirm Password
                                    </label>
                                </div>

                                <span className='text-sm ml-24 m-1 text-slate-400'>Already Have an account? <Link to={'/Login'} className='text-green-800 hover:underline underline-offset-2 '>Login</Link></span>

                                <div className="relative mt-4">
                                    <button className="bg-green-500 text-white rounded-md md:mt-6 px-2 py-1 hover:bg-black hover:scale-110 transition-all duration-500">Register</button>
                                </div>
                              </form>
                              
                              {msg ? <span className={`${msg=='registered successfully' ? 'text-green-500' : 'text-red-500 '} text-sm pt-4`}>*{msg}</span> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Register;
