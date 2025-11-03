
import React, { use, useState } from 'react';

import { useEffect } from 'react';
function Chat(){
    const [Chat,setChat]= useState([])
    const [visible,setvisible]= useState(5)
    const backend ="https://chatboard-backend.onrender.com"
    
    const addpost=(Chat)=>{
        if (input.text.trim(" ") ==="")
            return;
        
        setChat(Chat=>[...Chat,{"name":input.name,"text":input.text}])
         document.getElementById('Message').value = '';
        
         fetch((backend +'/api/post'),{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
             name: input.name,         
             message: input.text
            })
        })
        .then((res)=>res.json())
        .then(data => {
            console.log('Server response:', data);
        })
        
    }
    
    useEffect(()=>{
        const fetchmessage = ()=>{fetch((backend +'/api/message'))
        .then((res)=>res.json())
        .then((data) => setChat(data))
        }
        fetchmessage();
        setInterval(fetchmessage,1500);
    },[])
    
    const [input, setInput]= useState({"name":"","text":""})
    const setin = (i)=>{
        setInput(input=>({...input,"text":i}))
    }
    const setname=(i)=>{
        setInput(input=>({...input,"name":i}))
    }
   
    const showMore = () => {
        setvisible((prev) =>prev + 5)
    }
    
    return(
        <>

    <div className='name-input'>
      <input className="name-field" type="text" placeholder='Enter Your name' onChange={(e) => setname(e.target.value)}>
      </input>
      <button className="post-button" onClick={addpost}>Post</button>
    </div>
     
    <div className='input-output'>
        <div className='wrap-div-messages' style={{justifyContent:"left"}}>
            <textarea className="text-field" id="Message" type= "text" placeholder='Enter your text' onChange={(e) => setin(e.target.value)}>
        
            </textarea>
        </div>
        <div className='wrap-div-message-display'>
            <div className='chat-holder' >

                {Chat.slice(-visible).reverse().map((chat,index)=>{
                
                    return(
                        <>
                        <div className='chat-box'>
                            <h1 className='text-diplay'> {chat.name}: {chat.text}</h1>
                        </div>
                        </>
                    );
                })}
            </div>
            <div className='LoadMore'>
            <button onClick={showMore}>Load more</button>
            </div>
        </div>
        

    </div>
        
        </>
    )
}

export default Chat;