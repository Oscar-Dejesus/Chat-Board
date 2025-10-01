
import React, { use, useState } from 'react';
function Chat(){
    const [Chat,setChat]= useState(["hello","nice to meet you"])
    
    const addpost=(Chat)=>{
        if (input.text.trim(" ") ==="")
            return;
        setChat(Chat=>[...Chat,input.text])
    
    }
    const [input, setInput]= useState({"name":"","text":""})
    const setin = (i)=>{
        setInput(input=>({...input,"text":i}))
    }
   

    return(
        <>

            <div className='text-div'>
      <input className="Name" type="text" placeholder='Enter Your name'>
      </input>
      <button className="post-button" onClick={addpost}>Post</button>

    </div>
    <div className='text-div'>
      <textarea className="text-field" type= "text" placeholder='Enter your text' onChange={(e) => setin(e.target.value)}>
      </textarea>

    </div>
        <div >
            {Chat.map((chat,index)=>{
                return(
                    <>
                    <div className='chat-box'>
                    <h1>{chat}</h1>
                    </div>
                    </>
                );
            })}
        </div>
        </>
    )
}

export default Chat;