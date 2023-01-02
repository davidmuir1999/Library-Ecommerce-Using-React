import React from "react";

const Explore = () => {
    return(
       <section id="explore">
        <div className="container">
            <div className="row">
                <div className="row__column">
                    <h2 className="section__title">
                        Explore more <span className="purple">Books</span>
                    </h2>
                    <a href="/books">
                        <button className="btn">Explore books</button>
                    </a>
                </div>
            </div>
        </div>
       </section> 
    )
}

export default Explore;