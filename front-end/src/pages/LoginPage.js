import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../contexT/AuthContext";
<<<<<<< HEAD
//import {vklogin} from "../componentS/vk";
import './regAndLogPages.css'
=======
import './regAndLogPages.css'
import {useHistory} from "react-router-dom";
>>>>>>> Update app

export const LoginPage = () =>{
    const auth = useContext(AuthContext)
    const message = useMessage();
<<<<<<< HEAD
=======
    const history=useHistory();
>>>>>>> Update app
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

<<<<<<< HEAD
    const reg = async () =>{
        try{
       await request(window.location.href = "http://localhost:3000/registration")
    }catch (e) {
           console.log(e,'errooooooooooooooor')
        }}


    // const vklogin = async () =>{
    //     try{
    //         await fetch(window.location.href = "https://oauth.vk.com/authorize?client_id=7369115&display=page&redirect_uri=http://localhost:3000/&scope=friends&response_type=code&v=5.103")
    //
    //        // console.log(REDIRECT_URI?code+'codeeeeeeee')
    //         // await fetch(window.location.href ="https://oauth.vk.com/access_token?client_id=7369115&client_secret=JZe68RDW8oC6n7tS5L0z&redirect_uri=http://mysite.ru&code=7a6fa4dff77a228eeda56603b8f53806c883f011c40b72630bb50df056f6479e52a")
    //     }catch (e) {
    //         console.log(e,'errooooooooooooooor')
    //     }}
=======

    const reg = async () =>{
        try{
            await history.push(`/registration`)
        }catch (e) {
            console.log(e,'errooooooooooooooor')
        }}



    const vklogin = async () =>{
        try{

            await fetch(window.location.href = "https://oauth.vk.com/authorize?client_id=7369115&display=page&redirect_uri=http://localhost:3000/&scope=friends&response_type=code&v=5.103")
        }catch (e) {
            console.log(e,'error')
        }}
>>>>>>> Update app


    const loginHandler = async () => {
    try {
        const data = await request('/api/items/login', 'POST', {...form})
        auth.login(data.token, data.userId)
    } catch (e) {
<<<<<<< HEAD
    }
    }
=======
        console.log(e,'error')
    }}


    const loginEnter = async event => {
        if(event.key === 'Enter'){
        try {
            const data = await request('/api/items/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
            console.log(e,'error')
        }}}
>>>>>>> Update app


return(
<div >
<div className="row" >
<div className="card">
<div className="card-content col s6 offset-s3 m8">
    <span
        className="card-title"
    >Sign in</span>
</div>


<div className="input-field col s9 offset-s1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <i className="material-icons prefix " >email</i>
    <input
        placeholder="Email"
        id="email"
        type="text"
        name="email"
        className="our-input "
        onChange={changeHandler}
    />
</div>

<div className="input-field col s9 offset-s1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <i className="material-icons prefix">lock</i>
    <input
       placeholder="Password"
       id="password"
       type="password"
       name="password"
       className="our-input"
      onChange={changeHandler}
<<<<<<< HEAD
=======
       onKeyPress={loginEnter}
>>>>>>> Update app
/>
</div>


<a
    className="txt"
    disabled={loading}
    onClick={loginHandler}
>Login</a>

<<<<<<< HEAD
<span className="ak"> Don’t have an account?
=======
<a style={{marginLeft:"70px"}}>Or use social media</a>

<div className="vk card col s4 offset-s1">
    <button
        className="btn blue "
        onClick={vklogin}
        disabled={loading}
    >VK
    </button>
</div>

    <span className="ak"> Don’t have an account?
>>>>>>> Update app
<a
    className="txt1"
    onClick={reg}
    disabled={loading}
>Sign up</a></span>
<<<<<<< HEAD

    {/*<div className="card-action col s4 offset-s1">*/}
    {/*    <button*/}
    {/*        className="btn blue "*/}
    {/*        onClick={vklogin}*/}
    {/*        disabled={loading}*/}
    {/*    >*/}
    {/*        VK*/}
    {/*    </button>*/}
    {/*</div>*/}
    </div>
=======
</div>
>>>>>>> Update app
</div>
</div>
)
}

