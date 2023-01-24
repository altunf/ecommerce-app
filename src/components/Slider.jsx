import { Splide } from "@splidejs/react-splide";

import SliderCard from "./SliderCard";

function Slider() {
  return (
    <Splide
      options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        gap: "3rem",
      }}
    >
      <SliderCard
        image="../images/1.jpg"
        page="/categories/men's clothing"
        category="Man's Clothing"
      />
      <SliderCard
        image="../images/4.jpg"
        page="/categories/women's clothing"
        category="Women's Clothing"
      />
      <SliderCard
        image="../images/3.jpg"
        page="/categories/electronics"
        category="Electronics"
      />
      <SliderCard
        image="../images/2.jpg"
        page="/categories/jewelery"
        category="Jewelery"
      />
    </Splide>
  );
}

export default Slider;
