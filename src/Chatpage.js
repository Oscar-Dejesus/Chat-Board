
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Chatpage(){
    const [Chat,setChat]= useState([])
    const [visible,setvisible]= useState(5)
    const backend =process.env.REACT_APP_BACKEND_URL;
    const [input, setInput]= useState({"name":"","text":""})
    const navigate = useNavigate();
    const setin = (i)=>{
        setInput(input=>({...input,"text":i}))
    }
    
   
    const showMore = () => {
        setvisible((prev) =>prev + 5)
    }
    const addpost=(Chat)=>{
        if (input.text.trim(" ") ==="")
            return;
        
        setChat(Chat=>[...Chat,{"name":input.name,"text":input.text}])
         document.getElementById('Message').value = '';
        
         fetch((`${backend}/api/post`),{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
             Token: localStorage.getItem("token"),         
             message: input.text
            })
        })
        .then((res)=>res.json())
        .then(data => {
            console.log('Server response:', data);
        })
        
    }
    
    const redirect = ()=>{
        localStorage.removeItem("token")
        navigate("/login", { replace: true });
    }
    useEffect(()=>{


        
        const fetchmessage = async ()=>{
            let token = localStorage.getItem("token");
            if (!token) return;
          

            fetch((`${backend}/api/message`),{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Token:token
            })
        })
        .then((res)=>res.json())
        .then((data) => {
            if(Chat!=data){
            setChat(data)
            }
            
        })
        }
        fetchmessage();
        setInterval(fetchmessage,1500);
    },[])
    
    
    
    return(
        <>
    
     

        
        <div className='wrap-chat'>
            
            <div className='chat-holder' >

                <button  className="logout" onClick={redirect}>Logout</button>
                {Array.isArray(Chat) && Chat.slice(-visible).reverse().map((chat,index)=>{
                
                    return(
                        <>
                        <div className='chat-box'>
                            <h1 className='text-name'>{chat.name}:  </h1>
                            
                            <h1 className='text-messages'> {chat.text}</h1>
                        </div>
                        </>
                    );
                })}
                
                <div className='LoadMore'>
                <button onClick={showMore}>Load more</button>
                </div>
            </div>
             <input className="input-field" id="Message" type= "text" placeholder='Enter your text' onChange={(e) => setin(e.target.value)} onKeyDown={(e)=>{if(e.key=="Enter"){addpost()}}}>
        
            </input>
            

      
        </div>
        
        



        

        </>
    )
}

export default Chatpage;