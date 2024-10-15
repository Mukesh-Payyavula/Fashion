import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from "../components/Categories/Categories";
import OfferBanner from '../components/OfferBanner/OfferBanner';
import Products from "../components/Products/Products";
// import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
// import Brands from '../components/Brands/Brands';

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <OfferBanner />
            <Products />
            {/* <Features /> */}
            {/* <Brands /> */}
            <Footer />
        </>
    )
}

export default Home