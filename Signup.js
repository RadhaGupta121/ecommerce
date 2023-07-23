import React, { useState } from 'react';

const Signup=()=>{
    const[name,Setname]=useState("");
    const[email,Setemail]=useState("");
    const[Password,Setpassword]=useState("");
    const[repassword,Setrepassword]=useState("");
    const collectData=()=>{
        console.log(email,name,Password);
    }
    return (
        <div>
            <h1>Register</h1>
      <div className='register'>
   
    <input className='input' type="text" placeholder="Enter your Name" value={name} onChange={(e)=>{Setname(e.target.value)}}/>
    <input className='input' type="text" placeholder="Enter your Email" value={email} onChange={(e)=>{Setemail(e.target.value)}}/>
    <input className='input' type="text" placeholder="Enter Password" value={Password} onChange={(e)=>{Setpassword(e.target.value)}}/>
    <input className='input' type="text" placeholder="ReEnter Password" value={repassword} onChange={(e)=>{Setrepassword(e.target.value)}}/>
   
</div>
<center><button onClick={collectData} className='signupbtn'>Signup</button></center>
    
</div>
    )
}
export default Signup;