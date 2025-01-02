import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Login(){

    const [formData,setFormData]=useState({name:'',email:'',password:'',confirmPassword:''})

    const [message, setMessage]=useState('')
    
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData((prevValue)=>({
            ...prevValue, [name]:value,
        }))
    }

    const handleSubmitForm=(e)=>{
        e.preventDefault()
        const {name, email, password, confirmPassword}= formData;

        if(!name|| !email ||!password|| !confirmPassword){
          setMessage('All fields are required.')
          return;
        }
        
        if(password !== confirmPassword){
            setMessage('Password do not match.')
            return;
        }
            
        
            setMessage(`Login Successful! Welcome, ${name}.`)
        
            setFormData({name:'', email:'',password:'',confirmPassword:''})

    }

    return(
        <>
        <Header/>
        <main className="container py-3">
            <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 bg-light py-3 my-3" >
            {message && (
                <p  className="text-center py-2" style={{color: message.includes('Login Successful! Welcome')?'green':'red'}}>{message}</p>
            )}
            <form onSubmit={handleSubmitForm}>
            <h3 className="text-center">🛍️</h3>
            <h2 className="text-center pb-2" style={{fontFamily:'cursive'}}>Login to see more</h2> <br/>
            <div className="mx-5">
            <h6>Name: </h6><input type="text" placeholder="Enter your name" className="form-control mb-3" name='name' id='name' value={formData.name} onChange={handleChange}/> 
            <h6>Email: </h6><input type="email" placeholder="Email" className="form-control mb-3" name='email' id="email" value={formData.email} onChange={handleChange}/> 
            <h6>Password: </h6><input type="password" placeholder="Password" className="form-control mb-3" name='password' id='password' value={formData.password} onChange={handleChange}/> 
            <h6>Confirm Password: </h6><input type="password" placeholder="Password" className="form-control mb-3" name='confirmPassword' id='confirmPassword' value={formData.confirmPassword} onChange={handleChange}/> 
            <button type='submit' className="btn btn-outline-primary col-12 rounded">Submit</button>
            </div>
            
           
            </form>
          </div>
        <div className="col-md-4"></div>
        </div>
        </main>
        <Footer/>
        </>
    )
}