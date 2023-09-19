import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title,body} = post;
    return (
        <div className="w-full flex items-center justify-center">
            <div className=" border border-yellow-400 my-6 p-6 w-96 rounded-lg">
            <h4 className=" text-2xl text-center font-semibold">{title}</h4>
            <p>{body}</p>
        </div>
        </div>
    );
};

export default PostDetails;