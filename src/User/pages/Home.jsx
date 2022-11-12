import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroSlider from "../component/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../component/Section";
import PolicyCard from "../component/PolicyCard";
import Grid from "../component/Grid";
import ProductCard from "../component/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";

import banner from "../assets/images/banner.png";
// import productData from "../assets/fake-data/products";

const Home = () => {
  document.title = "Nụ Cười Sáng - Trang chủ";
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost/laravel-react-backend-gayquy/public/api/view-product`
      )
      .then((response) => {
        setProductData(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {/* Slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={3000}
      />
      {/* {Section} */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* best selling */}
      <Section>
        <SectionTitle>Top sản phẩm được yêu thích nhất</SectionTitle>

        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData?.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>

      {/* arrival */}
      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData?.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </div>
  );
};

export default Home;
