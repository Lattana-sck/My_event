import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from "react-router-dom"





function Register() {


    const history = useHistory()


    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {

        // .preventDefault();
        const { name, email, password } = user
        if (name && email && password) {
            console.log(user);
            axios.post("http://127.0.0.1:5000/register", user)

            .then(res => {
                console.log(res);
                alert(res.data.message)
               history.push("/login")
            })
            
        } else {
            alert(" c pas bon")
        }


    }


    return (
        <div>
            
                {console.log("User", user)}
                <h3>Sign Up</h3>

                <div className="">
                    <label>Name</label>
                    <input type="text" defaultValue={user.name} onChange={handleChange} name="name" className="" placeholder="name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" defaultValue={user.email} onChange={handleChange} name="email" className="" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" defaultValue={user.password} onChange={handleChange} name="password" className="" placeholder="Enter password" />
                </div>

                <button type="submit" onClick={register} className="">Sign Up</button>
                <p className="">
                    <NavLink to="/login" exact>
                        Login ?
                    </NavLink>

                </p>
                <div className="button" onClick={() => history.push("/login")} >
                    login
                </div>
            

        </div>
    )
}


export default Register
