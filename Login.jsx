import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import './Login.css'
const Login = () => {
    const [name,setName] =useState("");
  const[password,setPassword] =useState("");
  const [confirmpassword,setConfirmpassword] =useState("");
  const navigate = useNavigate()

  function submit(){
    navigate("/Home")
  }
  

  return (
    <div className='login'>
        <center>
        <h1>Login-Page</h1>
        <form>
       <input type="text" value ={name}  placeholder="Name" onChange={(e)=>setName(e.target.value)} required/><br/><br/>
       <input type="password" value={password}  placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
       <input type="password" value ={confirmpassword}  placeholder="Confirm password" onChange={(e)=>setConfirmpassword(e.target.value)} /><br/><br/>
       <Button variant="primary" onClick={submit} >Submit</Button><br/>
       </form>
       </center>
    </div>
  )
}

export default Login;
