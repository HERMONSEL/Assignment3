// import React from 'react';
// import defaultBcg from "../images"

// export default function SingleRooms() {
//     return (
//         <div>
//             hello guys be welcomed
//         </div>
//     )
// }

import React, { Component } from "react";
import defaultBcg from "../images/house1.jpg"
import Hero from "../Component/Hero";
import Banner from "../Component/banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../Component/StyledHero";


export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
      <StyledHero img={mainImg || this.state.defaultBcg}>
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </Hero>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={item} />
          })}
        </div>
        <div className="single-room-info">
          <article>
            <h3>details</h3>
            <p>{description}</p>
          </article>

<article className="info">
  <h3>info</h3>
  <h6>price : ${price}</h6>
  <h6>size : ${size} SQRF</h6>
  <h6>
    max capacity:{""}
    {capacity > 1 ? `${capacity} people` : `${capacity}person`}
 </h6>
 
   <h6>{pets ? "pets allowed" : "no pets allowwed"}</h6>
   <h6>{breakfast && "free breakfast"}</h6>
   
</article>

        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}> -{item}</li>;
          })}

        </ul>

      </section>
      </>
    );
  }
}
