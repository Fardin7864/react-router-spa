import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    const naviget = useNavigate();
    const handlgoback = () =>{
        naviget(-1);
    }
    console.log(error);
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold ">OOOps!!</h1>
            <p>This page is no found!</p>
            <button onClick={handlgoback} className="btn">Go Back</button>
        </div>
    );
};

export default Error;