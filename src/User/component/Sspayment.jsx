import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import numberWithCommas from "../utils/numberWithCommas";
import { Link } from "react-router-dom";

const Sspayment = (props) => {
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);
  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);
  return (
    <tbody>
      <tr className="product">
        <td className="product-image">
          <div className="product-thumbnail">
            <div className="product-thumbnail-wrapper">
              <img
                // className="product-thumbnail-image"
                src={item.product.image01}
                alt=""
              />
            </div>
            <span className="product-thumbnail-quantity" aria-hidden="true">
              {quantity}
            </span>
          </div>
        </td>
        <td className="product-description">
          <span className="product-description-name order-summary-emphasis">
            <Link to={`/catalog/${item.slug}`}>
              {`${item.product.title}  - ${item.size}`}
            </Link>
          </span>
        </td>

        <td className="product-price">
          <span className="order-summary-emphasis">
            {numberWithCommas(item.price)}
          </span>
        </td>
      </tr>
    </tbody>

    // <table className="product-table">
    //   <div className="checkout__item">
    //     <div className="checkout__item__image">
    //       <img src={item.product.image01} alt="" />
    //     </div>
    //     <div className="checkout__item__info">
    //       <span className="checkout__item__info__name">
    //         <Link to={`/catalog/${item.slug}`}>
    //         {`${item.product.title}  - ${item.size}`}
    //         </Link>
    //       </span>
    //       <div className="checkout__item__info__price">
    //         {numberWithCommas(item.price)}
    //       </div>
    //       <span
    //       className="checkout__item__info__quantity"
    //       aria-hidden="true"
    //       >{quantity}</span>
    //     </div>
    //   </div>
    // </table>
  );
};

Sspayment.propTypes = {
  item: PropTypes.object,
};

export default Sspayment;
