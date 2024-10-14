import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from "../components/Categories/Categories";
// import BestSellers from "../components/BestSeller/BestSeller";
import OfferBanner from '../components/OfferBanner/OfferBanner';
import Products from "../components/Products/Products";
// import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            {/* <BestSellers /> */}
            <OfferBanner />
            <Products />
            {/* <Features /> */}
            <Footer />
        </>
    )
}

export default Home