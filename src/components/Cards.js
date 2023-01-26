import React from 'react'
import { AiFillStar } from "react-icons/ai";

import Json from '../cards.json';
// import Badge from './badge';
import { GoPrimitiveDot } from "react-icons/go";
import { Badge } from './badge';
import Profile from './Profile';

function Cards() {
    return (
        <>
            <section>
                <div className="card">
                    {Json.blogCards.map((card) => {
                        return (
                            <div className="main-container" style={{ backgroundImage: `url(${card.bgImage})` }}>
                                {card.pin && <span className='right-star'>
                                    <AiFillStar />
                                </span>}
                                <div className="card-content">
                                    <Badge bgColor={card.badgeText} href="#f"  ><GoPrimitiveDot />{card.badgeText}</Badge>
                                    <h1 className="content-title">{card.cardHeading}</h1>
                                    {card.cardDesc && <p className="content-description">{card.cardDesc}</p>}
                                   <Profile {...card} />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}
export default Cards; 