import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {id, name, phone, website } = user;
    const naviget = useNavigate();
    const handledetails = () =>{
      naviget(`/user/${id}`);
    }
    return (
        <div className="border-2 border-yellow-300 rounded-lg bg-transparent p-4 flex flex-col items-center">
          <h3>{name}</h3>
          <p>{website}</p>
          <p>{phone}</p>
          <Link to={`/user/${id}`} className="text-blue-400 border-2 border-blue-500 rounded-lg p-2 my-2">User Details</Link>
          <button onClick={handledetails} className="btn ">User Details</button>
        </div>
    );
};

export default User;