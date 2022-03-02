import React from 'react';
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";


function Widgets() {
    
    return (

        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type="text" />
            </div>


            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={'1391329342714572800'} />
          
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="preetcharan22"
                    options={{ height: 400 }} />
                
                <TwitterShareButton
                    url={'https://twitter.com/preetcharan22'}
                    options={{ text: "#reactjs is awesome", via: "preetcharan22" }} />
                
            </div>
        </div>
    );
}

export default Widgets;
 