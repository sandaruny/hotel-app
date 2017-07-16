import React from 'react';

export const CategorySpotlight = ({ catName }) => {
  return (
    <div className="category-spotlight">
      <h3>{catName}</h3>
      <div className="view view-first">
        <img src="/images/1.jpg" />
        <div className="mask">
          <h2>Hover Style #1</h2>
          <p>A wonderful serenity has taken possession of my entire soul, like these </p>
          <a href="#" className="info">Read More</a>
        </div>
      </div>  
      <div className="view view-first">
        <img src="/images/2.jpg" />
        <div className="mask">
          <h2>Hover Style #1</h2>
          <p>A wonderful serenity has taken possession of my entire soul, like these </p>
          <a href="#" className="info">Read More</a>
        </div>
      </div>  
      <div className="view view-first">
        <img src="/images/3.jpg" />
        <div className="mask">
          <h2>Hover Style #1</h2>
          <p>A wonderful serenity has taken possession of my entire soul, like these </p>
          <a href="#" className="info">Read More</a>
        </div>
      </div>  
      <div className="view view-first">
        <img src="/images/4.jpg" />
        <div className="mask">
          <h2>Hover Style #1</h2>
          <p>A wonderful serenity has taken possession of my entire soul, like these </p>
          <a href="#" className="info">Read More</a>
        </div>
      </div>
      <div className="view view-first">
        <img src="/images/4.jpg" />
        <div className="mask">
          <h2>Hover Style #1</h2>
          <p>A wonderful serenity has taken possession of my entire soul, like these </p>
          <a href="#" className="info">Read More</a>
        </div>
      </div>
    </div>
  )
};

