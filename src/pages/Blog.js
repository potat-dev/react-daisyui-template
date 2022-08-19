import React from "react";
import Typography from "../components/Typography";
import Masonry from "../components/Masonry";
import Post from "../components/Post";
import useFetch from "react-fetch-hook";

// TODO:
// - Mansory posts layout
// - Pagination
// - Search, Tags, Categories
// - Custom post types
// - Infinite scroll (demo)

export default function Blog(props) {
  const { isLoading, data, error } = useFetch(
    "https://dummyjson.com/posts?limit=20" // &skip=10
  );

  return (
    <>
      <Typography>
        <h1>Blog Posts</h1>
      </Typography>
      <Masonry masonryColumns={props.config.masonryColumns}>
        {!isLoading &&
          data &&
          data.posts.map((post) => (
            <Post key={post.id} post={post} imagePreview={true} />
          ))}
      </Masonry>
    </>
  );
}
