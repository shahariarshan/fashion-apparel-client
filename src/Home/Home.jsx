import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Advertisement from "./Advertisement";
// import Products from "../Products/Products";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto container">
            <div>
                <Navbar></Navbar>
            </div>

            <div >
                <Banner></Banner>

                <Brands></Brands>

                <Advertisement></Advertisement>
            </div>
            <div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;