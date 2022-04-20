import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form className="pt-4">
      <h1 className="mb-2 text-2xl text-center"> Create new post</h1>
      {/* Управляйма компонента  */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Назва посту"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Опис посту"
      />
      <MyButton onClick={addNewPost}>Створити пост</MyButton>
    </form>
  );
};

export default PostForm;
