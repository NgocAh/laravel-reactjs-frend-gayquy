import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";
// import swal from "sweetalert2";
import swal from "sweetalert";

const ProductView = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  //routerv6
  const navigate = useNavigate();
  let product = props.product;
  if (product === undefined)
    product = {
      title: "",
      price: 0,
      // image01: null,
      // image02: null,
      // categorySlug: "",
      // slug: "",
      size: [],
      // description: "",
    };

  //Thiết lập hình main cho product
  const [previewImg, setPreviewImg] = useState(product.image01);
  //Hiển thị mô tả
  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [size, setSize] = useState(undefined);
  //Số lượng
  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (size === undefined) {
      swal.fire({
        icon: "error",
        title: "Vui lòng chọn kích cỡ",
      });
      return false;
    }

    return true;
  };
  //Thêm vào giỏ hàng
  const addToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: product.slug,
          size: size,
          price: product.price,
          quantity: quantity,
        })
      );
      swal.fire("Đã thêm vào giỏ hàng!", "You clicked the button!", "success");
      //  alert("Success");
    }
    //      if (dispatch(addItem(newItem))) {
    //        alert("Success");
    //      } else {
    //        alert("Fail");
    //      }
    //    }
  };
  //Mua ngay
  const goToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: product.slug,
          size: size,
          price: product.price,
          quantity: quantity,
        })
      );
      navigate("/cart");
    }
  };
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={`http://localhost/laravel-react-backend/public/${product.image01}`} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={`http://localhost/laravel-react-backend/public/${product.image02}`} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(product.price)}
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Kích cỡ</div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__list">
            <div className="product__info__item__quantity">
              <div
                className="product__info__item__quantity__btn"
                onClick={() => updateQuantity("minus")}
              >
                <i className="bx bx-minus"></i>
              </div>
              <div className="product__info__item__quantity__input">
                {quantity}
              </div>
              <div
                className="product__info__item__quantity__btn"
                onClick={() => updateQuantity("plus")}
              >
                <i className="bx bx-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>Thêm vào giỏ hàng</Button>
          <Button onClick={() => goToCart()}>Mua ngay</Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Chi tiết sản phẩm</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
