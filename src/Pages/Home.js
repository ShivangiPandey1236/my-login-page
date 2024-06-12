import React , { useEffect ,useState}from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Home() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  const[data,setData]=useState([]);//state to store fetched data

  useEffect(() => {
    const url ='https://jsonplaceholder.typicode.com/users';
    axios.get(url)
        .then(res => {
          
          setData(res.data);
         
        })
        .catch(err=>{
          console.log(err);
        })
}, []);
const handelDelete=(id)=>{
  const confirm=window.confirm("what you like to Delete?");
  if(confirm){
   
  axios.delete( 'http://localhost:3000/users' +id)
  .then(res=>{
    navigate('/')
  
    
  }).catch(err => console.log(err));
  }
}

  return (
  
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      
      
        <p>List of Users</p>
        <div className='w-75 rounded bg-white border shadow p-4'>
          <div className='d-flex justify-content-end'>
            <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            data.map((user,index)=>{
              return <tr key={index}>
                       <td>{user.id}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td>{user.phone}</td>
                      
                       <td>
                        <Link to ={`/read/${user.id}`}className='btn btn-sm btn-info me-2'>Read</Link>
                        <Link to ={`/update/${user.id}`}className='btn btn-sm btn-primary me-2'>Edit</Link>
                        <button onClick={e=>handelDelete(user.id)} className='btn btn-sm btn-danger'>Delete</button>
                       </td>
              </tr>
            })
            
            }
          </tbody>
        </table>

      </div>
  
                  <button  
                  onClick={handleLogout}
                  type="button" 
                       className="btn btn-success btn-block btn-lg gradient-custom-4 text-body
                       text-white">LOGOUT
                       </button>

                       </div> 
                
                 
      );

 
}
