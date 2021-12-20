// @ts-nocheck
// Components
import Announcement from "../../components/Announcements/Announcement";
import NavBar from "../../components/NavBar/NavBar";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Category/Categories";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Announcement />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
