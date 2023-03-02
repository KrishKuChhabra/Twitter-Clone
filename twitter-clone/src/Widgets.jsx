import React from 'react'
import "./Widgets.css"
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed"
function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets-input">
        <SearchIcon className='widgets-serachicon' />
        <input type="text" placeholder='Serach Twitter' />
      </div>

      <div className="widgets-widgets-container">
        <h2>what's happening</h2>

        <TwitterTweetEmbed tweetId={"1628111304257830919"}  />

       <TwitterTimelineEmbed sourceType="profile"
       screenName="mtaibbi"
       option={{height:400}} />
    
       <TwitterShareButton url={"https://www.facebook.com/ rofile.php?id=100052541839310"}
         options={{text: "#reactjs is awesom", via:"mtaibbi"}} />
      </div>
    </div>
  )
}


export default Widgets
