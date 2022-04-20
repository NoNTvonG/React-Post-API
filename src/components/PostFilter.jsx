import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filterName, filter, setFilter }) => {
  return (
    <div className="mt-4">
      <h1 className="mt-6 mb-6 text-2xl text-center">{filterName}</h1>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Пошук ..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={"Сортировка по ..."}
        options={[
          { value: "title", name: "Назві" },
          { value: "body", name: "Описі" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
