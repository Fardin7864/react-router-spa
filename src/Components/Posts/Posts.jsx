import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import { useState } from "react";

const Posts = () => {
    const posts = useLoaderData([]);
    const [isShowAll, setIsShowAll] = useState(false)
    const handleShowAll = () => { 
        setIsShowAll(!isShowAll);
     }
    // console.log(posts)
    let totalPost = isShowAll? posts : posts.slice(0,15)
    // {!isShowAll && (totalPost=posts.slice(0,10)) || (totalPost=posts)}
    return (
      <div>
          <div className=" grid grid-cols-4 gap-5 p-5">
            {
                totalPost.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
        {
            !isShowAll ? <button onClick={handleShowAll} className="btn btn-accent">Show all</button> : ''
        }
        
      </div>
    );
};

export default Posts;