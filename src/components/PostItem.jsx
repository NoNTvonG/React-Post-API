import React from "react";
import MyButton from "./UI/button/MyButton";

// Компонент єдиного поста + стилі
const PostItem = ({ post, index, remove }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <div className="flex flex-col p-2 m-6 border-2 border-dashed rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex font-bold">
              <p className="pr-2">{index}.</p>
              <p>{capitalizeFirstLetter(post.title)}</p>
            </div>
            <p>{capitalizeFirstLetter(post.body)}</p>
          </div>
          <MyButton onClick={() => remove(post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
