import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import Products from "../Products/Products";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto container">
            <div>
                <Navbar></Navbar>
            </div>
            
            <div >
                <Banner></Banner>
                {/* <Products></Products> */}
                <Brands></Brands>
                
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