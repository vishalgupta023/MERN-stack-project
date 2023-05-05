import React, { useEffect, useState } from 'react';
import './Signup.css'; // Import the CSS file
import { useNavigate} from "react-router-dom"

function SignupForm() {
  const navigate=useNavigate()
  const auth=localStorage.getItem("users")
  useEffect(()=>{
    if(auth){
      navigate("/")
    }
  },[])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =async (event) => {
    event.preventDefault();
    let result=await fetch("http://localhost:5000/register",{
      method:"Post",
      body:JSON.stringify({name,email,password}),
      headers:{"Content-Type":"application/json"}
    })
    result=await result.json();

    localStorage.setItem("users",JSON.stringify(result))
    if(result){
      setEmail("")
      setName("")
      setPassword("")
    }
    if(result){
       navigate("/")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Signup Form</h2>
   
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
     
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
