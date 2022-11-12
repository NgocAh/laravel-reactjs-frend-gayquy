import React from 'react'

import Section, { SectionBody, SectionTitle } from "../component/Section";
import Grid from '../component/Grid';
import ProductCard from '../component/ProductCard';
import { useParams } from "react-router-dom";// importing the hook
import ProductView from '../component/ProductView';

// import productData from '../assets/fake-data/products'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Product = (props) => {

  const [produclist, setproductlist] = useState([]);

  var products=[];
    useEffect(() => {
      axios.get(`/api/view-product`).then((res) => {
        if (res.status === 200) {
          setproductlist(res.data.products);
        }
      });
    }, []);
  
    products=produclist.map((item)=>{
        return item;
  }); 
  
    const getAllProducts = () => products;
  
    const getProducts = (count) => {
      const max = products.length - count;
      const min = 0;
      const start = Math.floor(Math.random() * (max - min) + min);
      return products.slice(start, start + count);
    };
    
    const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
    
    const getCartItemsInfo = (cartItems) => {
      let res = [];
      if (cartItems.length > 0) {
        cartItems.forEach((e) => {
          let product = getProductBySlug(e.slug);
          res.push({
            ...e,
            product: product,
          });
        });
      }
      // console.log(res)
      // console.log('sorted')
      // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
      return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    };
    
    const productData = {
      getAllProducts,
      getProducts,
      getProductBySlug,
      getCartItemsInfo,
    };


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