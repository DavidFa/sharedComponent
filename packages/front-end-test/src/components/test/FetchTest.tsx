import React, { useState, useCallback } from 'react'

const FetchTest: React.FC<{ postId: number }> = ({ postId }) => {

    const [post, setPost] = useState<{ id: number, title: string, body: string }>({ id: 0, title: "", body: "" })

    const fetchPost = useCallback(
         async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: "GET" });console.log('resolved', response);
            if (response.ok) {
                const data = await response.json();
                setPost(data);
            }
        },
        [postId]
    )


    const fetchHandler = () => {
        fetchPost();
    }

    return (
        <div>
            <div><span>FetchTest</span></div>
            {post.title && <div data-testid="post-title"><span>{post.title}</span></div>}
            {post.body && <div data-testid="post-body"><span>{post.body}</span></div>}
            <div><button onClick={fetchHandler}>Fetch</button></div>
        </div>
    )
}

export default FetchTest;
