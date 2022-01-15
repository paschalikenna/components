import React from "react";

const CommentDetail = (Props) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" />
    </a>
    <div className="content">
      <a href="/" className="author" src="./public/logo512">
        {Props.author}
      </a>
      <div className="metadata">
        <span className="date">{Props.date}</span>
      </div>
      <div className="text"> {Props.text}</div>
    </div>
  </div>
);

export default CommentDetail;
