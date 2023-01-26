import React from 'react'
import { BsHourglassTop } from "react-icons/bs";
import Json from '../cards.json';
import { HiDocumentDownload } from "react-icons/hi";
import High from "./High";


function Highlights() {
    return (
        <>
            <section className='highSection'>
                <div className="tagtitle">
                    <h1 className="title">< BsHourglassTop />Today's top highlights</h1>
                    <p className="desc"> Latest breaking news, pictures, videos, and special reports</p>
                    <div className="highlights">

                        {Json.HighlightsCards.map((highlights) => {
                            return <High {...highlights} upperBadge1="upperBadge1" mobileBadge="mobileBadge"/>  
                        })}

                    </div>
                    <div className="lower-button">
                        <button className='button-lo'>Load more post <HiDocumentDownload/></button>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Highlights