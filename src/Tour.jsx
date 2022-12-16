import React, { useState } from 'react';

const Tour = ({ id, name, image, info, price }) => {
  const [showMore, setShowMore] = useState(false);
  const renderedInfo = showMore ? info : `${info.substring(0, 200)}...`;
  const showButtonTag = showMore ? 'show less' : 'read more';
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>{renderedInfo}</p>
        <span className="btn" onClick={() => setShowMore((prev) => !prev)}>
          {showButtonTag}
        </span>

        <button className="delete-btn">Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
