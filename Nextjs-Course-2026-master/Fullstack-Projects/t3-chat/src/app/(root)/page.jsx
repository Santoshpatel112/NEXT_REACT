import { ModeToggle } from '@/components/ui/mode-toggle'
import { currentUser } from '@/modules/authentication/actions'
import ChatMessageView from '@/modules/chat/components/chat-message-view'
import React from 'react'

const Home = async() => {
  const user = await currentUser()
  return (
    <>
      <ChatMessageView user={user}/>
    </>
  )
}

export default Home