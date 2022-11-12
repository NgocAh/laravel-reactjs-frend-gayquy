import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import numberWithCommas from "../utils/numberWithCommas";
import Button from '../component/Button';
import { Link } from 'react-router-dom';
import CartItem from '../component/CartItem';
import axios from 'axios';

// import productData from '../assets/fake-data/products'

const Cart = () => {
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
  
  const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo,
  };
///

  const cartItems = useSelector((state) => state.cartItems.value);
  
  const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])
    document.title = "Giỏ hàng";
  return (
    <div className="cart">
      <div className="cart__info">
        <div className="cart__info__txt">
          <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
          <div className="cart__info__txt__price">
            <span>Thành tiền</span>
            <span>{numberWithCommas(Number(totalPrice))}</span>
          </div>
        </div>
        <div className="cart__info__btn">
          <Button size="block">Đặt hàng</Button>
          <Link to="/catalog">
            <Button size="block">Tiếp tục mua hàng</Button>
          </Link>
        </div>
      </div>
      {/* Danh sách product */}
      <div className="cart__list">
        {cartProducts.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Cart