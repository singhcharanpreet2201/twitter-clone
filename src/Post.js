import React, { forwardRef } from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar }, ref) => {
    
    
    return (
        
        <div className="post" ref={ref}>
            <div className='post__avatar'>
                <Avatar src={avatar}
                    sx={{ width: 50, height: 50 }} />
            </div>
           
            <div className="post__body">
                <div className="post__header">

                    <div className='post__headerText'>
                        <h3>
                            {displayName}{" "}
                            <span className='post__headerSpecial' >
                                {verified && <VerifiedIcon className='post__badge' />} @{username}
                            </span>
                        </h3>
                    </div>

                    <div className='post__headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                
                <img src={image} alt='' />
                
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon className="chat__icon" fontSize="small" />
                    <RepeatIcon className="repeat__icon" fontSize="small" />
                    <FavoriteBorderIcon className="favorite__icon" fontSize="small" />
                    <PublishIcon className="publish__icon" fontSize="small" />
                </div>
            </div>
        </div>
    );
  }
);

export default Post;
