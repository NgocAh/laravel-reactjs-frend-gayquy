import React from 'react'
import Button from './Button';
const CheckOrder = () => {
  document.title = "Trạng thái đơn hàng";
  return (
    <div className="CheckOrder">
      <div className="CheckOrder__title">
        <h1>Tra cứu trạng thái đơn hàng</h1>
      </div>
      <div className="CheckOrder__track">
        <div className="CheckOrder__track__search">
          <input
            className="CheckOrder__track__search__ID"
            type="text"
            name="order"
            placeholder="Nhập mã tra cứu..."
          ></input>
          <Button size="sm" animate={true} icon="bx bx-search">
            Tra cứu
          </Button>
          <br></br>
        </div>
        <div className="CheckOrder__track__TablleCheck">
          <table className="CheckOrder__track__TablleCheck__table">
            <thead className="CheckOrder__track__TablleCheck__table__thead">
              <tr className="CheckOrder__track__TablleCheck__table__thead__trHead">
                <th className="CheckOrder__track__TablleCheck__table__thead__trHead__th">
                  STT
                </th>
                <th className="CheckOrder__track__TablleCheck__table__thead__trHead__th">
                  Mã đơn hàng
                </th>
                <th className="CheckOrder__track__TablleCheck__table__thead__trHead__th">
                  Tình trạng đơn hàng
                </th>
              </tr>
            </thead>
            <tbody className="CheckOrder__track__TablleCheck__table__tbody">
              <tr className="CheckOrder__track__TablleCheck__table__tbody__trBody">
                <td className="CheckOrder__track__TablleCheck__table__tbody__trBody__td">
                  1
                </td>
                <td className="CheckOrder__track__TablleCheck__table__tbody__trBody__td">
                  F123
                </td>
                <td className="CheckOrder__track__TablleCheck__table__tbody__trBody__td">
                  Đã nhận hàng
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="CheckOrder__details">
        <div className="CheckOrder__details__oder">
          <h1>Trạng thái đơn hàng</h1>
        </div>
        <div className="CheckOrder__details__date">
          <p>Dự kiến giao hàng: 23/11/2001</p>
          <p>
            Mã đơn hàng <b>12356</b>
          </p>
        </div>
      </div>
      <div className="CheckOrder__track">
        <ul id="progress" className="CheckOrder__track__text-center">
          <li className="CheckOrder__track__text-center__active">
            <Icon icon="mdi:tick" />
          </li>
          <li className="CheckOrder__track__text-center__active">
            <Icon icon="mdi:tick" />
          </li>
          <li className="CheckOrder__track__text-center__active">
            <Icon icon="mdi:tick" />
          </li>
          <li className="CheckOrder__track__text-center__active">
            <Icon icon="mdi:tick" />
          </li>
        </ul>
      </div>
      <div className="CheckOrder__lists">
        <div className="CheckOrder__lists__list">
          <Icon icon="material-symbols:edit-document-outline" hFlip={true} />
          <p>
            Đơn hàng <br />
            Đặt hàng
          </p>
        </div>
        <div className="CheckOrder__lists__list">
          <Icon icon="material-symbols:edit-document-outline" hFlip={true} />
          <p>
            Đơn hàng <br />
            Chuẩn bị
          </p>
        </div>
        <div className="CheckOrder__lists__list">
          <Icon icon="material-symbols:edit-document-outline" hFlip={true} />
          <p>
            Đơn hàng <br />
            Vận chuyện
          </p>
        </div>
        <div className="CheckOrder__lists__list">
          <Icon icon="material-symbols:edit-document-outline" hFlip={true} />
          <p>
            Đơn hàng <br />
            Giao hàng thành công
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default CheckOrder