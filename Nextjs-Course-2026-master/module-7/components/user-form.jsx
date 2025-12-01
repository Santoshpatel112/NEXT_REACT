import { createUser } from '@/actions'
import React from 'react'

const UserForm = () => {

    // async function createUser(fromData) {
    //     "use server"  // 

    //     const name = fromData.get("name")

    //     console.log("Creating user" , name)
    // }


  return (
    <form action={createUser}>
         <input name="name" placeholder="John Doe" />
      <button type="submit">Create</button>
    </form>
  )
}

export default UserForm