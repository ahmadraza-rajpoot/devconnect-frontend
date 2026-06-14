import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createSocketConnection } from './utils/socket'

const Chat = () => {
    const {targetUserId} = useParams()

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    const user = useSelector(store => store.user)
    const userId = user?._id
 
    useEffect(()=>{

        if(!userId) return;

        const socket = createSocketConnection();
        
        socket.emit("joinChat", {userName: user.firstName, userId, targetUserId})


        socket.on("messageReceived", ({firstName, message})=>{

            console.log(firstName + " " + message)
            setMessages(msg => [...msg, {firstName, message}])
        })

        return () =>{
            socket.disconnect()
        }
    },[userId, targetUserId])

   

    const sendMessage =()=>{
        const socket = createSocketConnection()

        socket.emit("sendMessage",{firstName:user.firstName, userId, targetUserId, message})
        setMessage("")
    }


  return (
    <div className='w-200 mx-auto mb-5'>
        <h1 className='border-b border-gray-700 p-3'>Chat - Have Fun</h1>
        <div className='flex flex-col border border-gray-700'>

            <div className=' h-100 border border-gray-700 overflow-y-scroll p-4 '>
                {messages.map((msg, idx)=>(<div>
                        <div className="chat-header">
                            {msg.firstName}
                            <time className="text-xs opacity-50">2 hours ago</time>
                        </div>
                        <div className="chat-bubble">{msg.message}</div>
                        <div className="chat-footer opacity-50">Seen</div>
                    </div>))}

                
                
            </div>
       
           
            

            <div className='h-10 flex justify-between '>
                <input value={message} onChange={(e)=>setMessage(e.target.value)} className='border border-gray-700 px-2 outline-none w-full ' placeholder='type your message here...' type="text"  />
                <button onClick={sendMessage} className='btn btn-primary rounded-none'>Send</button>
            </div>
        </div>
    </div>
    
  )
}

export default Chat