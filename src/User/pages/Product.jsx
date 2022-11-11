import React from 'react'

import Section, { SectionBody, SectionTitle } from "../component/Section";
import Grid from '../component/Grid';
import ProductCard from '../component/ProductCard';
import { useParams } from "react-router-dom";// importing the hook
import ProductView from '../component/ProductView';

import productData from '../assets/fake-data/products'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Product = (props) => {

  /////
  
  let params = useParams(); // calling the hook
  const product = productData.getProductBySlug(params.slug); // you'll be able to use params object this way now (omitting the 'prop.match' prefix)
  document.title = product.title;
  const relatedProducts = productData.getProducts(8);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div>
      <Section>
        <SectionBody>
          <ProductView product={product}/>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
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
};;

export default Product;

// import React from 'react'

// import productData from "../assets/fake-data/products";

// const Product = props => {
//   // const product = productData.getProductBySlug(props.match.params.slug);
//   return (
//     <div>Product</div>
//   )
// }

// export default Product