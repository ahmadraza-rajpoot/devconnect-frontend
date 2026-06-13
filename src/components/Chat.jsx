import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
    const {targetUserId} = useParams()
  return (
    <div className='w-200 mx-auto'>
        <h1 className='border-b p-3'>Chat - Have Fun</h1>
        <div className='flex flex-col border'>

            <div className=' h-100 border overflow-y-scroll p-4 '>
                <div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">2 hours ago</time>
                    </div>
                    <div className="chat-bubble">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">Seen</div>
                </div>

                
                
            </div>
       
           
            

            <div className='h-10 flex justify-between '>
                <input className='border px-2 outline-none w-full ' placeholder='type your message here...' type="text"  />
                <button className='btn btn-primary rounded-none'>Send</button>
            </div>
        </div>
    </div>
    
  )
}

export default Chat