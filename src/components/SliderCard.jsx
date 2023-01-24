import React from "react";
import { Link } from "react-router-dom";
import { SplideSlide } from "@splidejs/react-splide";

const myImgStyle = {
  borderRadius: "1rem",
  position: "relative",
  left: "0",
  width: "100%",
  height: "350px",
  objectFit: "fill",
};

function SliderCard({ category, image, page }) {
  return (
    <SplideSlide>
      <div className="card-img-tiles">
        <div className="card-body text-center ">
          <Link to={page} className="btn">
            <div>{category}</div>
          </Link>
        </div>
        <img src={image} alt="..." style={myImgStyle} />
      </div>
    </SplideSlide>
  );
}

export default SliderCard;
