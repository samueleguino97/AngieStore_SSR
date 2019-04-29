import ButtonBar from "../components/header/button_bar";
import NavButton from "../components/header/nav_button";
import Header from "../components/header/header";
import PageLayout from "../components/layout";
import FeaturedProduct from "../components/products/featured_product";

function HomePage() {
    return (
        <div>
            <FeaturedProduct />
            <span>Colecciones</span>
            <style jsx>
                {`
                div {
                    min-height:80vh;
                    background:linear-gradient(#8E793E 0%,#AF9B5F 3%,#fff 100%);
                    padding:24px;
                }
                span {
                    font-size:64px;
                }

            `}
            </style>
        </div>


    );
}
export default HomePage;