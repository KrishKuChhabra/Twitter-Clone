import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button} from '@mui/material'
import db from './firebase'
function TweetBox() {
  const[tweetMessage, setTweetMessage]=useState("")
  const[tweetImage, setTweetImage]=useState("")
  
  const sendTweet=(e)=>{
    e.preventDefault();

    db.collection('posts').add({
       displayName:'krish Kumar',
       username:'krish',
       verified:true,
       text: tweetMessage,
       image: tweetImage,
       avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    });
    setTweetMessage("");
    setTweetImage("");

  }

  return (
    <div className='tweetbox'>
      <form>
       <div className="tweetbox-input">
        <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
        <input 
        onChange={e=>setTweetMessage(e.target.value)}
        value={tweetMessage} 
        type="text" 
        placeholder="what's happening ?" />
       
       </div>
        <input 
        value={tweetImage}
        onChange={e=>setTweetImage(e.target.value)}
        className='tweetbox-imageinput' 
        type="text" 
        placeholder="Enter your Image Url ?" /> 

       <Button onClick={sendTweet} type='submit' className='tweetbox-btn'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
