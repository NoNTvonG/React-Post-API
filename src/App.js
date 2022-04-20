import React, { useEffect, useState } from "react"
import PostFilter from "./components/PostFilter"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import { usePosts } from "./hooks/usePosts"
import MyModal from "./components/UI/modalWindow/MyModal"
import MyButton from "./components/UI/button/MyButton"
import PostService from "./API/PostService"
import MyLoader from "./components/UI/loader/MyLoader"
import { useFetching } from "./hooks/useFetching"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)
  const sortedAndSearchingPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, postLoader, postErrors] = useFetching(async () => {
    const response = await PostService.getAll()
    setPosts(response)
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <div className="container mx-auto">
        <MyButton onClick={() => setModal(true)}>Add new post</MyButton>
        <MyModal visibility={modal} setVisibility={setModal}>
          <PostForm create={createPost} />
        </MyModal>
        <PostFilter
          filterName="Search post"
          filter={filter}
          setFilter={setFilter}
        />
        {postLoader ? (
          <MyLoader>Loading...</MyLoader>
        ) : (
          <PostList
            posts={sortedAndSearchingPosts}
            errors={postErrors}
            remove={removePost}
          />
        )}
      </div>
    </div>
  )
}

export default App
