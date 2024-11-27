import React from 'react'

export default function Usernewsplace({news}) {
  
  const { id, title, url, thumbnailUrl} = news;
  return (
    <div className="news-id">
    
    <h4>{id}</h4>
    <h4>{title}</h4>
    <p>{url}</p>
    <p>{thumbnailUrl}</p>
  </div>
  )
}

