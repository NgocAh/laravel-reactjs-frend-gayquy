import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import Sspayment from "../component/Sspayment";
import numberWithCommas from "../utils/numberWithCommas";
import axios from "axios";
import swal from "sweetalert2";



const Checkout = () => {
  document.title = "Thanh toán";
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
    // console.log(products)
    const productData = {
      getAllProducts,
      getProducts,
      getProductBySlug,
      getCartItemsInfo,
    };
  // const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.value);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );
  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);

  var danhsachsp="";
  const danhsach = productData.getCartItemsInfo(cartItems);
  if(productData.getCartItemsInfo(cartItems)[0].product)
  {
    danhsachsp=danhsach.map((item, index) => (
      <Sspayment item={item} key={index} />
    ))
  }
  // const [fullname, setFullname] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [note, setNote] = useState("");

  // const [err1, setErr1] = useState("");
  // const [err2, setErr2] = useState("");
  // const [err3, setErr3] = useState("");
  // const [err4, setErr4] = useState("");

  // const [f1, setF1] = useState(false);
  // const [f2, setF2] = useState(false);
  // const [f3, setF3] = useState(false);
  // const [f4, setF4] = useState(false);

  // // const [cart] = value.cart;
  // const [total, setTotal] = useState(0);
  const [priceall, setPriceall] = useState(0);
  const [priceShip, setPriceShip] = useState(30000);
  // const [auth, setAuth] = useState(true);
  // const [profile, setProfile] = useState();

  useEffect(() => {
    setPriceall(totalPrice + 30000);
  }, [totalPrice]);

  // useEffect(() => {
  //   if (fullname === "" && f1) {
  //     setErr1("Hãy nhập họ và tên");
  //   } else {
  //     setErr1("");
  //   }
  // }, [f1, fullname]);
  // useEffect(() => {
  //   if (phone === "" && f2) {
  //     setErr2("Hãy nhập số điện thoại");
  //   }
  // }, [f2, phone]);
  // useEffect(() => {
  //   if (address === "" && f3) {
  //     setErr3("Hãy nhập địa chỉ");
  //   }
  // }, [address, f3]);
  // useEffect(() => {
  //   if (email === "" && f4) {
  //     setErr4("Hãy nhập email");
  //   }
  // }, [email, f4]);
  const [errorlist, setError] = useState([]);

  const [radioInput, setRadio]=useState({
    payment_method_id: '',
  });
  const handleRadioInput = (e) => {
    e.persist();
    setRadio({...radioInput, [e.target.name]:e.target.value });
  }
  const [orderInput, setOrder] = useState({
    name: '',
    email: '',
    number_phone: '',
    address: '',
    note: '',
});
const handleInput = (e) => {
  e.persist();
  setOrder({...orderInput, [e.target.name]:e.target.value });
}
// console.log('testitem',JSON.parse(localStorage.getItem('cartItems')))
const test=JSON.parse(localStorage.getItem('cartItems'));
// console.log(test)


const submitOrder = (e) => {
  e.preventDefault();
  
  const formData = new FormData();

  formData.append('name', orderInput.name);
  formData.append('email', orderInput.email);
  formData.append('number_phone', orderInput.number_phone);

  formData.append('address', orderInput.address);
  formData.append('note', orderInput.note);
  formData.append('items',JSON.stringify(test));
  formData.append('method_payment',radioInput.payment_method_id)

  axios.post(`/api/order`, formData).then(res=>{
      if(res.data.status === 200)
      {
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Đặt hàng thành công',
          showConfirmButton: false,
          timer: 2500
        })
          console.log('thanh cong');
          // swal("Success",res.data.massage,"success");
      
          setOrder({...orderInput, 
            name: '',
            email: '',
            number_phone: '',
            address: '',
            note: '',
          });
      }
      else if(res.data.status === 422)
      {
        // console.log('loi');
        swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Kiểm tra lại thông tin đăt hàng',
          showConfirmButton: false,
          timer: 2500
        })
        setError(res.data.errors);

      }
      else if(res.data.status === 400)
      {
        swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Đặt hàng lỗi vui lòng thử lại sau',
          showConfirmButton: false,
          timer: 2500
        })
      }
  });
}
  return (
    <div className="row container1">
      <div className="col-md-6 col-sm-12 col-xs-12">
        <div className="maincheckout">
          <div className="maincheckout-header">
            <a href="/" className="logo">
              <h1 className="logo-text">Nụ cười sáng</h1>
            </a>

            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/cart">Giỏ hàng</Link>
              </li>

              <li className="breadcrumb-item breadcrumb-item-current">
                Thông tin giao hàng
              </li>
            </ul>
          <form onSubmit={submitOrder}  method="post" enctype="multipart/form-data">
            <div className="maincheckout-content">
              <div className="step">
                <div className="step-sections steps-onepage" step="1">
                  <div className="section">
                    <div className="section-header">
                      <h2 className="section-title">Thông tin giao hàng</h2>
                    </div>
                    <div className="section-content section-customer-information no-mb">
                      <div className="fieldset">
                        <div className="field field-required  ">
                          <div className="field-input-wrapper">
                            <label
                              className="field-label"
                              htmlFor="billing_address_full_name"
                            >
                              Họ và tên
                            </label>
                            <input
                              className="field-input"
                              placeholder="Họ và tên"
                              type="text"
                              required
                              name="name" onChange={handleInput} value={orderInput.name}
                            />
                          </div>
                        </div>
                        <div className="field  field-two-thirds  ">
                          <div className="field-input-wrapper">
                            <label
                              className="field-label"
                              htmlFor="checkout_user_email"
                            >
                              Email
                            </label>
                            <input
                              autoComplete="false"
                              placeholder="Email"
                              autoCapitalize="off"
                              spellCheck="false"
                              className="field-input"
                              size="30"
                              type="email"
                              id="checkout_user_email"
                              required
                              name="email" onChange={handleInput} value={orderInput.email}
                            />
                          </div>
                        </div>

                        <div className="field field-required field-third  ">
                          <div className="field-input-wrapper">
                            <label
                              className="field-label"
                              htmlFor="billing_address_phone"
                            >
                              Số điện thoại
                            </label>
                            <input
                              autoComplete="false"
                              placeholder="Số điện thoại"
                              autoCapitalize="off"
                              spellCheck="false"
                              className="field-input"
                              size="30"
                              maxLength="15"
                              type="tel"
                              name="number_phone"
                              onChange={handleInput} value={orderInput.number_phone}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section-content">
                      <div className="fieldset">
                        <form
                          // onSubmit={handleSubmit}
                          autocomplete="off"
                          id="form_update_shipping_method"
                          className="field default"
                          accept-charset="UTF-8"
                        >
                          <div
                            id="form_update_location_customer_shipping"
                            className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                            for="customer_pick_at_location_false"
                          >
                            <div className="field-input-wrapper">
                              <label
                                className="field-label"
                                for="billing_address_address1"
                              >
                                Địa chỉ
                              </label>
                              <input
                                placeholder="Địa chỉ"
                                autocapitalize="off"
                                spellcheck="false"
                                className="field-input"
                                size="30"
                                type="text"
                                name="address"
                                onChange={handleInput} value={orderInput.address}
                              />
<br></br>
                            </div>
                          </div>
                          <div
                            id="form_update_location_customer_shipping"
                            className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                            for="customer_pick_at_location_false"
                          >
                            <div className="field-input-wrapper">
                              <label
                                className="field-label"
                                for="billing_address_address1"
                              >
                                Chú Thích
                              </label>
                              <textarea
                                placeholder="Chú thích"
                                autocapitalize="off"
                                spellcheck="false"
                                className="field-input"
                                size="30"
                                type="text"
                                name="note"
                                onChange={handleInput} value={orderInput.note}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div id="change_pick_location_or_shipping">
                      <div id="section-payment-method" className="section">
                        <div className="section-header">
                          <h2 className="section-title">
                            Phương thức thanh toán
                          </h2>
                        </div>
                        <div className="section-content">
                          <div className="content-box">
                            <div className="radio-wrapper content-box-row">
                              <label
                                className="radio-label"
                                for="payment_method_id_1002766550"
                              >
                                <div className="radio-input payment-method-checkbox">
                                  <input
                                    className="input-radio"
                                    name="payment_method_id"
                                    type="radio"
                                    value="0"
                                    onChange={handleRadioInput} 

                                    // checked=""
                                  />
                                </div>
                                <div className="radio-content-input">
                                  <img
                                    className="main-img"
                                    src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                                    alt=""
                                  />
                                  <div>
                                    <span className="radio-label-primary">
                                      Thanh toán khi giao hàng (COD)
                                    </span>
                                  </div>
                                </div>
                              </label>
                            </div>

                            <div className="radio-wrapper content-box-row">
                              <label
                                className="radio-label"
                                for="payment_method_id_1002909122"
                              >
                                <div className="radio-input payment-method-checkbox">
                                  <input
                                    className="input-radio"
                                    name="payment_method_id"
                                    type="radio"
                                    value="1"
                                    onChange={handleRadioInput} 

                                    // checked=""
                                  />
                                </div>
                                <div className="radio-content-input">
                                  <img
                                    className="main-img"
                                    src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=2"
                                    alt=""
                                  />

                                  <div className="content-wrapper">
                                    <span className="radio-label-primary">
                                      Chuyển khoản qua ngân hàng
                                    </span>
                                    <span className="quick-tagline hidden"></span>
                                    <span className="quick-tagline  hidden ">
                                      Buy Now, Pay Later
                                    </span>
                                  </div>
                                </div>
                              </label>
                            </div>

                            <div className="radio-wrapper content-box-row">
                              <label
                                className="radio-label"
                                for="payment_method_id_1002971608"
                              >
                                <div className="radio-input payment-method-checkbox">
                                  <input
                                    // type-id="21"
                                    // id="payment_method_id_1002971608"
                                    className="input-radio"
                                    name="payment_method_id"
                                    type="radio"
                                    value="2"
                                    onChange={handleRadioInput} 

                                    // checked=""
                                  />
                                </div>
                                <div className="radio-content-input">
                                  <img
                                    className="main-img"
                                    src="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=2"
                                    alt=""
                                  />
                                  <div className="content-wrapper">
                                    <span className="radio-label-primary">
                                      Ví Momo
                                    </span>
                                    <span className="quick-tagline hidden"></span>
                                    <span className="quick-tagline  hidden ">
                                      Buy Now, Pay Later
                                    </span>
                                  </div>
                                </div>
                                
                              </label>
                              <div
                                  className="radio-wrapper content-box-row content-box-row-secondary"
                                  for="payment_method_id_1002909122"
                                >
                                  <div className="blank-slate">
                                    Nụ Cười Sáng nhận chuyển khoản qua:
                                  </div>
                                  <div className="blank-slate">
                                    - STK:16610000084260 Ngân Hàng BIDV Chi
                                    nhánh Thủ Thiêm - TRAN THI NGOC ANH -
                                  </div>
                                  <div className="blank-slate">
                                    - MOMO : 0941402932 - TRAN THI NGOC ANH
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="step-footer">
                  <div id="form_next_step" accept-charset="UTF-8">
                    <Button
                      size="block"
                      // onClick={handleSubmit}
                    >
                      <span>Hoàn tất đơn hàng</span>
                    </Button>
                  </div>
                  <Link to="/cart">Giỏ hàng</Link>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12 col-xs-12">
        <div className="sidebar">
          <div className="sidebar-content">
            <div className="order-summary order-summary-is-collapsed">
              <h2 className="visually-hidden">Thông tin đơn hàng</h2>
              <div className="order-summary-sections">
                <div
                  className="order-summary-section order-summary-section-product-list"
                  data-order-summary-section="line-items"
                >
                  <table className="product-table">
                    {/* {cartProducts.map((item, index) => (
                      <Sspayment item={item} key={index} />
                    ))} */}
                    {danhsachsp}
                  </table>
                </div>
                <div
                  className="order-summary-section order-summary-section-total-lines payment-lines"
                  data-order-summary-section="payment-lines"
                >
                  <table className="total-line-table">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span className="visually-hidden">Mô tả</span>
                        </th>
                        <th scope="col">
                          <span className="visually-hidden">Giá</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="total-line total-line-subtotal">
                        <td className="total-line-name">Tạm tính</td>
                        <td className="total-line-price">
                          <span className="order-summary-emphasis">
                            {numberWithCommas(Number(totalPrice))}
                          </span>
                        </td>
                      </tr>
                      <tr className="total-line total-line-shipping">
                        <td className="total-line-name">Phí vận chuyển</td>
                        <td className="total-line-price">
                          <span
                            className="order-summary-emphasis"
                            data-checkout-total-shipping-target="0"
                          >
                            {numberWithCommas(priceShip)}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot className="total-line-table-footer">
                      <tr className="total-line">
                        <td className="total-line-name payment-due-label">
                          <strong className="payment-due-label-total">
                            Tổng cộng
                          </strong>
                        </td>
                        <td className="total-line-name payment-due">
                          <span
                            className="payment-due-price"
                            data-checkout-payment-due-target="22500000"
                          >
                            {numberWithCommas(priceall)}
                          </span>
                          <span
                            className="checkout_version"
                            data_checkout_version="8"
                          ></span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
