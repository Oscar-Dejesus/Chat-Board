
import React, { use, useState } from 'react';
import { useEffect } from 'react';
function Admin(){
    const [Chat,setChat]= useState([])
    const [visible,setvisible]= useState(5)
    const [bnum,Setbnum]= useState(0)
    
    
    
    const showMore = () => {
        setvisible((prev) =>prev + 5)
    }
    const remove=(id)=>{
        
        fetch(('http://localhost:5050/api/remove'),{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
             id: id
            })
            
        })
        .then((res)=>res.json())
        .then(data => {
            console.log('Server response:', data);
        })
        
    }

    useEffect(()=>{
        fetch(('http://localhost:5050/api/message'))
        .then((res)=>res.json() )
        .then((data) => setChat(data))
    },[])
    return(
        <>
        <div > 
            {Chat.slice(0,visible).map((chat,index)=>{
                
                return(
                    <>
                    <div className='chat-box' >
                        <h1>{chat.name}: </h1>
                        <h1>{chat.text}</h1>
                        <button onClick={() =>remove(chat.id)}> delete </button>
                        
                    </div>

                    </>

                );
                
            })}

        </div>
        <div className='LoadMore'>
        <button onClick={showMore}>Load more</button>
        </div>
        </>
    )
}

export default Admin;