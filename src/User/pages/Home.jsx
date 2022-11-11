import React from "react";
import { Link } from "react-router-dom";

import HeroSlider from "../component/HeroSlider";
import Section, { SectionTitle, SectionBody} from "../component/Section";
import PolicyCard from "../component/PolicyCard";
import Grid from "../component/Grid";
import ProductCard from "../component/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";

import banner from "../assets/images/banner.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {

  // const [produclist, setproductlist] = useState([]);

  // var products=[];
  //   useEffect(() => {
  //     axios.get(`/api/view-product`).then((res) => {
  //       if (res.status === 200) {
  //         setproductlist(res.data.products);
  //       }
  //     });
  //   }, []);
  
  //   products=produclist.map((item)=>{
  //       return item;
  // }); 
  
  //   const getAllProducts = () => products;
  
  //   const getProducts = (count) => {
  //     const max = products.length - count;
  //     const min = 0;
  //     const start = Math.floor(Math.random() * (max - min) + min);
  //     return products.slice(start, start + count);
  //   };
    
  //   const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
    
  //   const getCartItemsInfo = (cartItems) => {
  //     let res = [];
  //     if (cartItems.length > 0) {
  //       cartItems.forEach((e) => {
  //         let product = getProductBySlug(e.slug);
  //         res.push({
  //           ...e,
  //           product: product,
  //         });
  //       });
  //     }
  //     // console.log(res)
  //     // console.log('sorted')
  //     // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
  //     return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
  //   };
    
  //   const productData = {
  //     getAllProducts,
  //     getProducts,
  //     getProductBySlug,
  //     getCartItemsInfo,
  //   };



  ////
  document.title = "Nụ Cười Sáng - Trang chủ";

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
            {productData.getProducts(4).map((item, index) => (
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
            {productData.getProducts(8).map((item, index) => (
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
