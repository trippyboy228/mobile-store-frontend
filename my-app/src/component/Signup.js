import React, { useEffect, useState } from 'react';
import './User.css';
import { useNavigate } from 'react-router-dom';


const Sign=()=>{
         
         const [name,setName]=useState('');
         const [email,setEmail]=useState('');
         const [password,setPassword]=useState('');
         const naviagate=useNavigate();
          
         useEffect(()=>{
            const auth=localStorage.getItem('user')
            if(auth){
                naviagate('/')
            }
         })
    
        const handleForm=async()=>{
            console.log(name,email,password)

         let result=await fetch('http://localhost:3002/register',{
                method:'Post',
                body:JSON.stringify({name,email,password}),
                headers:{
                    'Content-Type':'application/json'
                },
            });
         
       result=await result.json()
            console.log(result)
            localStorage.getItem("user",JSON.stringify(result));
           
            naviagate('/')
           
        }
    return(<>
    <div className='signup'>
        <h1>Create Account</h1>
       
        <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Name' />
       
        <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter the Email' />
       
        <input className='inputBox' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter the Password' />
       
        <input className='submit' onClick={handleForm} type="Submit"  />
    </div>
    </>)
}

export default Sign