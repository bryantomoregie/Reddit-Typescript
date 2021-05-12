import React from "react";

interface CardProps {
  avatar: string;
  title: string;
  time: string;
  likes: number;
  comments: number;
  pictureAttached: boolean;
  picture?: string;
  post: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="cardContainer">
      <div className="topDiv">
        <div>
          <img className="avatar divTop" src={props.avatar} />
        </div>

        <h3 className="title divTop">{props.title}</h3>
        <h3 className="join divTop">Join</h3>
        <h3 className="time divTop">{props.time}</h3>
        <div className="dots divTop">...</div>
      </div>
      <div className="middleDiv">
        <div id="post">{props.post}</div>
        {props.picture && <img id="postImage" src={props.picture} />}
      </div>
      <div className="bottomDiv">
        <div className="likes divBottom">
          <i className="fas fa-arrow-up"></i>
          {props.likes}
          <i className="fas fa-arrow-down"></i>
        </div>
        <div className="comments divBottom">
          <i className="far fa-comment-alt"></i>
          {props.comments}
        </div>
        <div className="share divBottom">
          <i className="far fa-share-square"></i>
          Share
        </div>
      </div>
    </div>
  );
};

export default Card;
