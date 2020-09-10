import React from 'react'
import Hero from "../Component/Hero";
import Banner from "../Component/banner";
import { Link } from "react-router-dom";

export const Rooms = () => {
    return (
        <Hero hero = "roomsHero">
        <Banner title ="our rooms">
                <Link to ="/" className= "btn-primary">
                return Home
                </Link>
                </Banner>
                </Hero>
    );
};

export default Rooms;