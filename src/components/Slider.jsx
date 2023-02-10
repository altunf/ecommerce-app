import { Splide } from "@splidejs/react-splide";
import SliderCard from "./SliderCard";

const categories = [
  {
    id: 0,
    image: "../images/1.jpg",
    page: "/categories/men's clothing",
    category: "Man's Clothing",
  },
  {
    id: 1,
    image: "../images/4.jpg",
    page: "/categories/women's clothing",
    category: "Women's Clothing",
  },
  {
    id: 2,
    image: "../images/3.jpg",
    page: "/categories/electronics",
    category: "Electronics",
  },
  {
    id: 3,
    image: "../images/2.jpg",
    page: "/categories/jewelery",
    category: "Jewelery",
  },
];

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
      {categories.map((category) => {
        return (
          <SliderCard
            key={category.id}
            image={category.image}
            page={category.page}
            category={category.category}
          />
        );
      })}
    </Splide>
  );
}

export default Slider;
