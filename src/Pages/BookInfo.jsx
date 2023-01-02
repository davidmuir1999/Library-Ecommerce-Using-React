import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "../components/UI/Rating";

const BookInfo = ({ books }) => {
    return(
        <div id="books__body">
            <div id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <a href="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </a>
                            <a href="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </a>
                        </div>
                        <div className="books__selected">
                            <figure className="book__selected--figure">
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">Title</h2>
                                <Rating rating="4.5"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookInfo;