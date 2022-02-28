import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";

const Comments = () => {

    const [comments, setComments] = useState([])
    const [searchID, setSearchID] = useState(0)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res) => {
            setComments(res.data)
        })
    }, [])

  return (
    <div>
        <h1>Comments Page</h1>
        <br />
        <label>Filter by PostID: </label><input type='number' onChange={(e) => {setSearchID(e.target.value)}} />
        {comments
        .filter((id) => {
            if (+searchID === 0) {
                return id
            } else if (+id.postId === +searchID) {
                return id
            }
        })
        .map((c) => {
            return (
                <div>
                    <br />
                    <h3>PostID: {c.postId}</h3>
                    <h3>Name: {c.name}</h3>
                    <h3>Email: {c.email}</h3>
                    <h5>{c.body}</h5>
                </div>
            )
        })}
    </div>
  )
};

export default Comments;
