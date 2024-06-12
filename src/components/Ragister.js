import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
export default function Ragister() {
  const navigate=useNavigate();
  const[input,setInput]=useState({
    name: "",
    email:"",
    password:"",
  });

  //to store value in local storage//
  const handleSubmit=(e)=>{
    e.preventDefault();
localStorage.setItem("user",JSON.stringify(input));
navigate("/login");
  };
  return (
    <section class="vh-100 " style={{backgroundClip:' #eee'}}>
       <div class="mask d-flex  align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card " style={{borderRadius: '15px'}} >
            <div class="card-body p-5">
             
  
                  <h2 class="text-uppercase text-center mv-5">Ragister NOW</h2>
  
                  <form onSubmit={handleSubmit}>
  
                    <div className="form-outline mb-4">
                     
                        <input 
                        name="name"
                        value={input.name}
                        onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                        type="text" id="form3Example1cg" class="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                      </div>
                   
  
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
                       text-white">Register
                       </button>
                    </div>
  <p className="text-center text-muted mt-5 mb-0">
    have already an account?
    <Link to="/login" className="fw-bold text-body">
    <u>Login here</u>
    </Link>
  </p>
                  </form>
  
               
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}



