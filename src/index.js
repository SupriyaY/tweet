import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Tweet = () => {
return(
    <div className="tweet">
        <Avatar/>
        <div className="content">
        <NameWithHandle/><Time/>
        <Message/>
        <div className="buttons">
            <ReplyButton/>
            <RetweetButton/>
            <LikeButton/>
            <MoreOptionsButton/>
        </div>
        </div>
        </div>
);
}

const Avatar = () => {
    return(
        <img src="https://www.gravatar.com/avatar/nothing" 
        className="avatar"
        alt="avatar"/>
    );
}

const Message = () => {
  return(
      <div className="message">
          This is less than 140 characters
          </div>
  );

}


const NameWithHandle = () =>{
    return(
        <span className ="name-with-handle">
            <span className="name">Supriya Yerramilli</span>
            <span className="handle">@sups</span>
            </span>
    );

}

const Time = () => (
    <span className ="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () =>(
    <i className = "fa fa-retweet retweet-button"/>
);

const LikeButton = () =>(
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipis-h more-options-button"/>
);


ReactDOM.render(<Tweet/>, document.querySelector('#root'))