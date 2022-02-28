import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            // console.log(res.data)
            setPosts(res.data)
        })
    })

    // useEffect(() => {
    //     const getPosts = () =>
    //       fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => res.json())
    //         .then((data) =>
    //           console.log(data)
    //         )
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     getPosts();
    //   }, []);
    

  return (
      <div>
          <h1>Posts Page</h1>
          <br />
          <label>Filter by title: </label><input type="text" onChange={(e) => {setSearchTerm(e.target.value)}} />
          <br />
          <br />
          {posts.filter((val) => {
              if (searchTerm === "") {
                  return val
              } else if  (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                  return val
              }
          }).map((p) => {
              return (
                  <div>
                      <br />
                      <h3>{p.title}</h3>
                      <p>{p.body}</p>
                </div>
              )
          })}
      </div>
  );
};

export default Posts;
