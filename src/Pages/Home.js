import React from "react";
import Hero from "../Component/Hero";
import Banner from "../Component/banner";
import { Link } from "react-router-dom";
import Services from "../Component/services";
import FeaturedRooms from "../Component/FeaturedRooms";

export default function Home() {
    return (
        <>
    <Hero hero="defaultHero">
        <Banner title="luxurious rooms"
            subtitle = "deluxe rooms" subtitle="deluxe room 
            starting at $299">
            <Link to="/rooms" className="btn-primary">
                our rooms
            </Link>
        </Banner>
    </Hero>;
    <Services/>
    <FeaturedRooms/>
    </>
    )
       
}

Hero.defaultProps = {
    hero: "defaultHero",
};
