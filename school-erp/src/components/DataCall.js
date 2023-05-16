import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
function DataCall()
{

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://retoolapi.dev/FlCaNC/posts").then((response) => {
          setPosts(response.data);
        });
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();
    
        const data = {
          title: e.target.title.value,
          body: e.target.body.value,
        };
    
        axios.post("https://retoolapi.dev/FlCaNC/posts", data).then((response) => {
          setPosts([...posts, response.data]);
        });
      };
    

    return (
        <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="body" placeholder="Body" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default DataCall;