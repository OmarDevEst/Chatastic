import {SyntheticEvent, useState} from 'react';
import{firebase, firestore} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import { useUser } from '../context/user';
import "../Styles/Chat.css";

interface IMessages{
    id:string,
    text:string,
    uid:string,
    photoURL:string,
    displayName:string,
    createdAt:firebase.firestore.Timestamp
}

const messagesRef = firestore.collection("messages");
const messagesQuery= messagesRef.orderBy("createdAt","desc").limit(4);

const Channel = () =>{
    const [text,setText]= useState("");
    const{user}=useUser();
    const[messages,loading]=useCollectionData<IMessages>(
        messagesQuery,
        {idField:"id"}
        );

    const sendMessage =(event:SyntheticEvent)=>{
        event.preventDefault();
        if(text.trim().length < 1)return;
        if(user){
            const{displayName,photoURL,uid} = user;
            messagesRef.add({
                text,
                uid,
                photoURL,
                displayName,
                createdAt:firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        setText("");
        
    }

    if(loading){
        return <h1>Loading.........</h1>
    }
    

    return(
        <section>
            <section>{messages && messages.reverse().map(({text,displayName,id,photoURL})=>(
                <div className="Chats" key={id}>
                    <img src={photoURL} alt={displayName} width="50" height="50"/><p><h2>{displayName}:</h2><h3>{text}</h3></p>
                </div>
            ))}</section>
            <form onSubmit={sendMessage}>
                <input type="text" value={text} onChange={(e) =>setText(e.target.value)}/>
                <button className="butt">Send</button>
            </form>
        </section>
    )
}

export default Channel;