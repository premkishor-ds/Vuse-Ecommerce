import { ChangeEvent, useState } from "react";
import { DynamicStar } from "react-dynamic-star";

export default function StarRating(rating: any) {
  const [star] = useState({
    totalStars: 5,
    sharpness: 2.5,
    outlined: true,
    outlinedColor: "",
    fullStarColor: "#FFBC00",
    emptyStarColor: "transparent"
  });


  return (
    <div className="star-rating">
      <DynamicStar
        rating={rating.rating}
        width={20}
        height={20}
        outlined={star.outlinedColor ? star.outlinedColor : star.outlined}
        totalStars={star.totalStars}
        sharpnessStar={star.sharpness}
        fullStarColor={star.fullStarColor}
        emptyStarColor={star.emptyStarColor}
      /> <span className="star-rating-value">({rating.rating})</span>
    </div>
  );
}
