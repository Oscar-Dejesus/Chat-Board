
import React, { use, useState } from 'react';
import { useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';

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
             name: input.name,         // Replace with dynamic values if needed
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
        setInterval(fetchmessage,5000);
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

            <div className='text-div'>
      <input className="Name" type="text" placeholder='Enter Your name' onChange={(e) => setname(e.target.value)}>
      </input>
      <button className="post-button" onClick={addpost}>Post</button>

    </div>
    <div className='text-div'>
      <textarea className="text-field" id="Message" type= "text" placeholder='Enter your text' onChange={(e) => setin(e.target.value)}>
      </textarea>

    </div>
        <div className='wrap-div'>
        <div className='text-holder' >

            {Chat.slice(-visible).map((chat,index)=>{
                
                return(
                    <>
                    <div className='chat-box'>
                        <h1 className='text-diplay'> {chat.name}: {chat.text}</h1>
                    </div>
                    </>
                );
            })}
        </div>
        </div>
        <div className='LoadMore'>
        <button onClick={showMore}>Load more</button>
        </div>
        </>
    )
}

export default Chat;