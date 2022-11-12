import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import ProductView from './ProductView'
import Button from './Button';

import { remove } from '../redux/product-modal/productModalSlice';
import axios from "axios";

// import productData from '../assets/fake-data/products'

const ProductViewModal = (props) => {
  ///
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
    console.log(products)
    const productData = {
      getAllProducts,
      getProducts,
      getProductBySlug,
      getCartItemsInfo,
    };
//
  const productSlug = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);


  return (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

// ProductViewModal.propTypes = {}

export default ProductViewModal