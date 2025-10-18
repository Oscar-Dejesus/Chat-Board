
import React, { use, useState } from 'react';
import { useEffect } from 'react';
function Chat(){
    const [Chat,setChat]= useState([])
    
    const addpost=(Chat)=>{
        if (input.text.trim(" ") ==="")
            return;
        
        setChat(Chat=>[...Chat,{"name":input.name,"text":input.text}])
         document.getElementById('Message').value = '';
        fetch(('http://localhost:5050/api/post'),{
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
        fetch(('http://localhost:5050/api/message'))
        .then((res)=>res.json())
        .then((data) => setChat(data))
    },[])
    
    const [input, setInput]= useState({"name":"","text":""})
    const setin = (i)=>{
        setInput(input=>({...input,"text":i}))
    }
    const setname=(i)=>{
        setInput(input=>({...input,"name":i}))
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
        <div >
            {Chat.map((chat,index)=>{
                return(
                    <>
                    <div className='chat-box'>
                        <h1>{chat.name}: </h1>
                        <h1>{chat.text}</h1>
                    </div>
                    </>
                );
            })}
        </div>
        </>
    )
}

export default Chat;