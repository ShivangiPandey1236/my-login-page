import React, { useState } from 'react'
import { useNavigate ,Link } from 'react-router-dom';
export default function Login() {
  const navigate=useNavigate();
  const[input,setInput]=useState({
  
    email:"",
    password:"",
  });
  const handleLogin=(e)=>{
    e.preventDefault();
    const loggeduser=JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password ===loggeduser.password)
      {
        localStorage.setItem("loggedin",true)

navigate("/");
    }
    else{
      alert("wrong email OR password")
    }
  };
  return (
    <section class="vh-100" style={{backgroundClip:' #eee'}}>
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style={{borderRadius: '25px'}} >
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">LOGIN</p>
  
                  <form onSubmit={handleLogin} >
                  <div className="form-outline mb-4">
                     
                     <input
                     name="email"
                     value={input.email}
                     onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} 
                     
                     type="email" id="form3Example1cg" class="form-control form-control-lg" />
                     <label className="form-label" htmlFor="form3Example1cg">Your Email</label>
                   </div>
   
      
  
                   <div className="form-outline mb-4">
                     
                     <input
                     name="password"
                     value={input.password}
                     onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} 
                     type="password" id="form3Example1cg" class="form-control form-control-lg" />
                     <label className="form-label" htmlFor="form3Example1cg">Your password</label>
                   </div>
                   <div class="d-flex justify-content-center">
                      <button  type="submit" 
                       className="btn btn-success btn-block btn-lg gradient-custom-4 text-body
                       text-white">LOGIN
                       </button>
                    </div>
  <p className="text-center text-muted mt-5 mb-0">
    do not have and account?
    <Link to="/ragister" className="fw-bold text-body">
    <u>Ragister here</u>
    </Link>
  </p>
                    
  
                   
  
                  </form>
  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
