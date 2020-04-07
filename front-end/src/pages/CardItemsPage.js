import React, {useState, useCallback, useEffect, useContext} from "react";
import {useHttp} from "../hooks/http.hook";
import {CardItemsList} from "./componentCard/CardItemsList";
<<<<<<< HEAD
import {AuthContext} from "../contexT/AuthContext";
import {Loader} from "../componentS/Loader";
import {useHistory, useParams} from "react-router-dom";
=======
import {Loader} from "../componentS/Loader";
import {useHistory, useParams} from "react-router-dom";
import Axios from "axios";
>>>>>>> Update app


export const CardItemsPage =()=>{
let [item, setItem] = useState([]);
<<<<<<< HEAD
const {token}= useContext(AuthContext)
const {request,loading} = useHttp();
const history=useHistory();
const CardId = useParams().id

const WCards = useCallback(async ()=>{
    try{
        const fetched = await request('/api/item', 'GET', null,{
            Authorization: `Bearer ${token}`
        })
        setItem(fetched)
    }catch (e) {}
},[token,request])

useEffect(()=>{
    WCards()
},[WCards])
=======
const {loading} = useHttp();
const history=useHistory();
const CardId = useParams().id
const cardId = useParams().id

useEffect(()=> {
Axios.get(`/api/item/getItemsById?collId=${cardId}`)
    .then(response => {
        if (response.data.success) {
            setItem(response.data.items)
        }
        else {

            alert('Failed to create item')
        }
    })
},[])
>>>>>>> Update app



if(loading){
    return <Loader/>
}

const add = async () =>{
    try{
        await history.push(`/addItem/${CardId}`)
    }catch (e) {
<<<<<<< HEAD
        console.log(e,'errooooooooooooooor')
    }}
const back = async () =>{
    try{
        await request(window.location.href = "http://localhost:3000/collections")
    }catch (e) {
        console.log(e,'errooooooooooooooor')
=======
        console.log(e,'error')
    }}
const back = async () =>{
    try{
        await history.push(`/collections`)
    }catch (e) {
        console.log(e,'error')
>>>>>>> Update app
    }}



return (
<div>
<div>
<div className="btn-toolbar">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <button type="button" className="btn "
            onClick={back}>
        <i className="material-icons">arrow_back</i></button>
    <button type="button" className="btn "
            onClick={add}
    >Add item</button>
</div>

</div>
<<<<<<< HEAD
    {!loading && item && <CardItemsList items={item}/>}
=======
    <div className="collection">
    {!loading && item && <CardItemsList items={item}/>}
    </div>
>>>>>>> Update app
</div>
);
};
