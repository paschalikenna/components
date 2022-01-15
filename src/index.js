import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApproveCard from "./ApproveCard";

const App = () => {
  return (
    <div className="ui container comments">
      <div>
        <ApproveCard> Are you sure about this? </ApproveCard>
      </div>
      <ApproveCard header="Fem">
        <CommentDetail
          author="Sam"
          date="Today at 10am"
          text="I love this article"
        />
      </ApproveCard>
      <ApproveCard header="Fem">
        <CommentDetail
          author="Joshua"
          date="Yesterday at 6pm"
          text=" You are a Genuis"
        />
      </ApproveCard>
      <ApproveCard header="Fem">
        <CommentDetail
          author="Matthew"
          date="Yesterday at 9pm"
          text=" You are a Genuis"
        />
      </ApproveCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
