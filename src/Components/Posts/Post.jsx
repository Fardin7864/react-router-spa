import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,title, body} = post;

    return (
        <div className="border-2 border-yellow-200 rounded-lg p-4 flex flex-col items-center">
            <h3 className="text-xl">{title.slice(0,40)}</h3>
            <p className="flex flex-grow">{body}</p>
            <Link to={`/post/${id}`} className="btn btn-accent">Post Detail</Link>
        </div>
    );
};

export default Post;