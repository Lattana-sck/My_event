import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import ButtonGoogle from './ButtonGoogle'
import axios from "axios"
import { useHistory } from "react-router-dom"


function Login(setLoginUser) {


    const history = useHistory()


    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:5000/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")
            })
    }







    return (
        <div>

            <div className="center-form">
                <ButtonGoogle />
                <h3>Sign In</h3>

                <div className="">
                    <label>Email address</label>
                    <input type="email" onChange={handleChange} defaultValue={user.email} className="" placeholder="Enter email" />
                </div>

                <div className="">
                    <label>Password</label>
                    <input type="password" onChange={handleChange} defaultValue={user.password} className="" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="">
                        <input type="checkbox" className="" id="customCheck1" />
                        <label className="" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={login} className="">Submit</button>
                <p className="">
                    Tu  n'es pas inscrit ? inscris toi
                    <NavLink to="/register"> ici</NavLink>
                    
                </p>

            </div>
        </div>
    )
}

export default Login
