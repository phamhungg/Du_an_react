
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import React, { useEffect, useState } from "react";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import axios from "axios";
const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/sp/get-all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
      {data.map((Dl) => (
  <div key={Dl.MaSanPham} className="px-2">
    <Product
      _id={Dl.MaSanPham}
      img ={`/public/uploads/${Dl.AnhDaiDien}`} 
      productName={Dl.TenSanPham}
      price={Dl.Giaban}
      color={Dl.Mausac}
      badge={true}
      des={Dl.MoTaSanPham}
    />
  </div>
))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
