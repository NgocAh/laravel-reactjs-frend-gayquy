import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HeroSlider = props => {
    const data= props.data
  return (
    <div className="hero-slider">
      {data.map((item, index) => (
        <HeroSliderItem key={index} item={item} />
      ))}
    </div>
  );
}

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

const HeroSliderItem = (props) => (
  <div className="hero-slider__item">
    <div className="hero-slider__item__info">
      <div className="hero-slider__item__info__title">
        <span>{props.item.title}</span>
      </div>

      <div className="hero-slider__item__info__description">
        <span>{props.item.description}</span>
      </div>

      <div className="hero-slider__item__info__btn">
        <Link to={props.item.path}>
          <button>xem chi tiết</button>
        </Link>
      </div>
    </div>

    <div className="hero-slider__item__image">
      <img src={props.item.img} alt="" />
    </div>
  </div>
);

export default HeroSlider

