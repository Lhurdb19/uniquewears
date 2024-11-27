import React from 'react'

export default function User({myUser}) {
    const { name, username, email, phone, website} = myUser;
    

  return (
    <div className='myuser'>
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  )
}