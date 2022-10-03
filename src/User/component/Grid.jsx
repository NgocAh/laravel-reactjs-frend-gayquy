import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {
    //Điều kiện của khoảng cách giữa các hàng và cột
    const style = {
      gap: props.gap ? `${props.gap}px` : "0"
    }

    const col = props.col ? `grid-col-${props.col}` : ""
    const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : ""
    const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : ""

  return (
    <div className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
      {props.children}
    </div>
  )
}

//Xác thực đầu vào của Grid
//isRequired chính là bạn muốn ai đó sử dụng component của bạn bắt buộc phải truyền một số props nào đó thì bạn chỉ cần thêm isRequired vào


Grid.propTypes = {
  col: PropTypes.number.isRequired,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
}

export default Grid