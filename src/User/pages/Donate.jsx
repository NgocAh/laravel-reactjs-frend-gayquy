import React,{useState} from "react";

import { Link, useLocation } from "react-router-dom";
import Button from "../component/Button";

const Donate = () => {
  document.title = "Quyên góp";
  const [moneyOrther, setMoneyOrther] = useState("");

  const [isMoneyOrther, setIsMoneyOrther] = useState(false);
  return (
    <div className="Donate">
      <section className="Donate__HelpUs">
        <header className="Donate__HelpUs__HelpUsTitle">
          <h1>Help us do more</h1>
        </header>
        <p className="Donate__HelpUs__HelpUsParagraph1">
          Là những con người trẻ sống trong thế kỉ công nghệ thông tin phát
          triển mạnh mẽ với mong muốn mang sức trẻ, năng lực và sự hiểu biết của
          bản thân đóng góp, giúp đỡ cho cộng đồng, những người xung quanh, giúp
          cho họ có thể sống trong hoàn cảnh tốt hơn. Qua đó, kết hợp giữa công
          nghệ và công tác tình nguyện thông qua việc bán hàng gây quỹ trên nền
          tảng Website. Nhằm lan tỏa được những thông điệp tốt đẹp về những lợi
          ích của xã hội, cộng đồng và qua đó cũng thúc đẩy phát triển nền tảng
          thương mại điện tử.
        </p>
        <p className="Donate__HelpUs__HelpUsParagraph2">
          Nụ Cười Sáng nhận chuyển khoản qua:
          <p>
            - STK:16610000084260 Ngân Hàng BIDV Chi nhánh Thủ Thiêm - TRAN THI
            NGOC ANH
          </p>
          <p>- MOMO : 0941402932 - TRAN THI NGOC ANH</p>
        </p>
      </section>
      <div className="Donate__Form">
        <div className="Donate__Form__GiftFrequency">
          <header className="Donate__Form__GiftFrequency__Title">
            <h4>Tần suất hỗ trợ</h4>
          </header>
          <fieldset className="Donate__Form__GiftFrequency__Frequency">
            <div className="Donate__Form__GiftFrequency__Frequency__RadioWrapper">
              <input
                className="Donate__Form__GiftFrequency__Frequency__RadioWrapper__Radio"
                id="monthly"
                type="radio"
                name="Frequency"
                defaultChecked
              />
              <label htmlFor="monthly">MỖI THÁNG</label>
            </div>
            <div className="Donate__Form__GiftFrequency__Frequency__RadioWrapper">
              <input
                className="Donate__Form__GiftFrequency__Frequency__RadioWrapper__Radio"
                type="radio"
                id="one-time"
                name="Frequency"
              />
              <label htmlFor="one-time">MỘT LẦN</label>
            </div>
          </fieldset>
        </div>

        <div className="Donate__Form__SelectAmount">
          <header className="Donate__Form__SelectAmount__Title">
            <h4>Chọn số tiền muốn ủng hộ (nghìn VNĐ)</h4>
          </header>
          <fieldset className="Donate__Form__SelectAmount__Amounts">
            <div className="Donate__Form__SelectAmount__Amounts__RadioWrapper">
              <input
                defaultChecked
                className="Donate__Form__SelectAmount__Amounts__RadioWrapper__Radio"
                type="radio"
                name="amount"
                id="100"
                // value={monney100}
                // onChange={(e) => set100(e.target.value)}
              />
              <label htmlFor="100">100</label>
            </div>
            <div className="Donate__Form__SelectAmount__Amounts__RadioWrapper">
              <input
                className="Donate__Form__SelectAmount__Amounts__RadioWrapper__Radio"
                type="radio"
                name="amount"
                id="200"
                // value={monney200}
                // onChange={(e) => set200(e.target.value)}
              />
              <label htmlFor="200">200</label>
            </div>
            <div className="Donate__Form__SelectAmount__Amounts__RadioWrapper">
              <input
                className="Donate__Form__SelectAmount__Amounts__RadioWrapper__Radio"
                type="radio"
                name="amount"
                id="500"
                // value={monney500}
                // onChange={(e) => set500(e.target.value)}
              />
              <label htmlFor="500">500</label>
            </div>
            <div className="Donate__Form__SelectAmount__Amounts__RadioWrapper">
              <input
                className="Donate__Form__SelectAmount__Amounts__RadioWrapper__Radio"
                type="radio"
                name="amount"
                id="1000"
                // value={monney1000}
                // onChange={(e) => set1000(e.target.value)}
              />
              <label htmlFor="1000">1000</label>
            </div>
            <div className="Donate__Form__SelectAmount__Amounts__RadioWrapper">
              <input
                className="Donate__Form__SelectAmount__Amounts__RadioWrapper__Radio"
                type="radio"
                name="amount"
                id="other"
                onClick={() => setIsMoneyOrther(true)}
              />
              <label htmlFor="other">Khác</label>
            </div>

            {isMoneyOrther ? (
              <div className="Donate__Form__SelectAmount__Amounts__MoneyOrther">
                <input
                  defaultChecked
                  className="Donate__Form__SelectAmount__Amounts__MoneyOrther__Text"
                  type="text"
                  name="amount"
                  value={moneyOrther}
                  onChange={(e) => setMoneyOrther(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
          </fieldset>
        </div>

        <fieldset className="Donate__Form__NameInputWrapper">
          <label htmlFor="name-input">Họ và tên:</label>
          <input
            className="Donate__Form__NameInputWrapper__NameInput"
            type="text"
            id="name-input"
            placeholder="Họ và tên"
          />

          <label htmlFor="donate-email">Email:</label>
          <input
            className="Donate__Form__NameInputWrapper__NameInput"
            type="email"
            id="donate-email"
            placeholder="Email"
          />

          <Link to="/listdonate">
            Nhấn vào để xem danh sách các nhà hảo tâm
          </Link>
        </fieldset>
        <div className="Donate__Form__btn">
          <Button
            size="block"
            animate={true}
            icon="bx bx-search"
          >
            Ủng hộ ngay
          </Button>
        </div>
      </div>
      {/* <DonationForm /> */}
    </div>
  );
};

export default Donate;
