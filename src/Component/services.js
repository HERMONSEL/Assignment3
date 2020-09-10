import React, { Component} from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, Fabeer, FaShare, FaAccessibleIcon, FaTheRedYeti} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state = {
        Services: [
            { 
                icon:<FaCocktail />,
                title:"FREE COCKTAILS",
                info:
                "We love you and just you. as well as we valued you so we do chearish too. enjoy the taste of freshness with us.",
            },
            {
                icon:<FaHiking />,
                title:"ALL DAY LONG",
                info:
                "You have been working for us for long. Take a walk today and refresh with nature. dont forget to carry the lunch box.",
            },
            {
                icon:<FaShuttleVan />,
                title:"FREE RIDES",
                info:
                " We offer our cherished customers a free ride over the island. cruise or what? we are at your service.",
            },

            {
                icon:<FaAccessibleIcon />,
                title:"FREE ACCESS",
                info:
                "Our access points are always friendly. even your wheel and white stick is catered for.",
            },


        ],
    };
    render() { 
        return (
            <section className="services">
                <Title title="services"/>
                
        <div className="services-center">
            {this.state.Services.map((item, index) => {
            return (
                                 
                <article key={index}
                className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>
            );
        })}</div>
        </section>
    );
 }

}
