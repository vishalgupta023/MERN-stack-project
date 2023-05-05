import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let auth=localStorage.getItem("users");
    useEffect(()=>{
        if(auth){
            navigate("/")
        }
    },[])
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        let result = await fetch("http://localhost:5000/login", {
            method: "Post",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })
        result = await result.json();

        if (result.name) {
            localStorage.setItem("users", JSON.stringify(result))
            setEmail("")
            setPassword("")
            navigate("/")
        }else{
            alert(result.marks)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h2>Login Form</h2>


            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
