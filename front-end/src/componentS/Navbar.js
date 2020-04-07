<<<<<<< HEAD
import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../contexT/AuthContext";
import './componentS.css'
=======
import React, {useContext, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../contexT/AuthContext";
import './componentS.css'
import Axios from "axios";
>>>>>>> Update app


export const Navbar = () =>{
    const history = useHistory()
    const auth = useContext(AuthContext)
<<<<<<< HEAD
=======
    const [role, setRole]=useState(0)
    const userId=auth.userId
>>>>>>> Update app

    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
<<<<<<< HEAD

    return (
<nav>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <div className="row">
        <ul className="col s2 offset-s10">
            <li><a href ="/items">Admin</a></li>
            <li><a href ="/" onClick={logoutHandler}><i className="material-icons">exit_to_app</i></a></li>
        </ul>
    </div>
</nav>
=======
    useEffect(()=> {
        Axios.get(`/api/items/role?id=${userId}`)
            .then(response => {
                if (response.data.success) {
                    setRole(response.data.role)
                }
                else {
                    alert('Failed to create item')
                }
            })
    },[])

    return (
    <nav>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <div className="row">
        <ul className="col s2 offset-s10">
            { role===1 && <li><a href ="/items">Admin</a></li>}
            <li><a href ="/" onClick={logoutHandler}><i className="material-icons">exit_to_app</i></a></li>
        </ul>
    </div>
    </nav>
>>>>>>> Update app
    )
}