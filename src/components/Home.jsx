import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div>
            <div className="text-3xl font-semibold text-center bg-black text-white mb-2">
                <h2>Home Page</h2>
            </div>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p className="text-4xl text-center">Loading....</p> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;