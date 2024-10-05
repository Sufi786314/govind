import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-toastify'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Register = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [uid,setUid] = useState("")
    const navigate = useNavigate()
    // form function
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const res = await axios.post(
                `/api/v1/auth/register`,
                {
                username,
                email,
                password,
                uid
                
            }
            );
            // console.log("Response",res.data);Speacial Note the property is sucess
            // console.log("ResponseReport",res.data.sucess)
            if(res.data.sucess){
                toast.success(res.data.messsage)
                // console.log('yess')
                navigate('/login')
            }
            else{
                toast.error(res.data.messsage)
            }
        }
        catch (error){
            console.log(error)
            toast.error('Something went wrong')
        }
    }
  return (
    <Layout title={'Register-Page SB'}>
        <div className='register'>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <input type="text" className="form-control" id="exampleInputName" placeholder='Enter Your User Name' value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
    </div>
    <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail" placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
    </div>
    <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword" placeholder='Enter Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
    </div>
    <div className="mb-3">
        <input type="text" className="form-control" id="exampleInputPhone" placeholder='Enter Your Uid' value={uid} onChange={(e)=>{setUid(e.target.value)}} required/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        </div>
    </Layout>
  )
}

export default Register