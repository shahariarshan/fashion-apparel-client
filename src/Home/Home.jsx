import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto container">
            <div>
                <Navbar></Navbar>
            </div>
            
            <div >
                <Banner></Banner>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;