import React from "react";

import HeroSlider from "../component/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";

const Home = () => {
  document.title = "Nụ Cười Sáng - Trang chủ";

  return (
    <div>
      <HeroSlider data={heroSliderData} />
    </div>
  );
};

export default Home;
