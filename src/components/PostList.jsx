import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, remove, errors }) => {
  return (
    <div className="mb-6">
      <h1 className="mt-6 mb-6 text-2xl text-center">Post List</h1>
      {posts.length ? (
        <div className="border-2 divide-y-2 rounded-lg">
          <TransitionGroup>
            {posts.map((post, index) => (
              <CSSTransition key={post.id} timeout={500} classNames="post">
                <PostItem post={post} remove={remove} index={index + 1} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      ) : (
        <div className="border-2 divide-y-2 rounded-lg">
          <div className="p-2 m-6 text-center border-2 border-dashed rounded-lg">
            {errors ? (
              <h1 className="text-center">API error: {errors}</h1>
            ) : (
              <h1 className="text-xl">Posts not found!</h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
