import React from "react";
import StarRatings from "react-star-ratings";

const StarRating = ({ rating }) => {
  return (
    <div>
      <StarRatings
        rating={rating}
        starRatedColor="orange"
        numberOfStars={5}
        name="rating"
        starDimension="15px"
        starSpacing="2px"
      />
    </div>
  );
};

export default StarRating;
