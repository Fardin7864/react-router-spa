import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, phone, website} = user;
    const naviget = useNavigate();
    const handlGoBack = () =>{
        naviget(-1);
    }
    // console.log(user)
    return (
        <div>
            <h3>Name:{name}</h3>
            <p>web:{website}</p>
            <p>Phone:{phone}</p>
            <button onClick={handlGoBack} className="btn">Go Back</button>
        </div>
    );
};

export default UserDetails;