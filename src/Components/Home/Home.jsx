import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    return (
        <>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? <p>Loading ...</p> :
                <Outlet></Outlet>

            }
            <Footer></Footer>
            
        </>
    );
};

export default Home;