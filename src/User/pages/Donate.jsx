import React,{useState} from "react";

import { Link, useLocation } from "react-router-dom";
import Button from "../component/Button";
import axios from "axios";
import swal from "sweetalert2";


const Donate = () => {
  document.title = "Quyên góp";
  const [moneyOrther, setMoneyOrther] = useState("");
  const [isMoneyOrther, setIsMoneyOrther] = useState(false);
  const [donateInput, setDonate] = useState({
    amount: '',
    name: '',
    email: '',
});
const handleInput = (e) => {
  e.persist();
  setDonate({...donateInput, [e.target.name]: e.target.value })
}
///frequency
const [frequency,setFrequency]=useState('');
const handleChange=(e)=>{
  setFrequency( e.target.value);
 }
///number_money
const [numberMoney,setNumberMoney]=useState('');
const handleChangeMoney=(e)=>{
  e.preventDefault();
    const newNum = { ...numberMoney};
    newNum[e.target.value] = e.target.value;
    setNumberMoney( e.target.value);
 }

console.log('money2w',numberMoney)
const submitDonors = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('frequency',frequency);
  formData.append('number_money', numberMoney);
  formData.append('name', donateInput.name);
  formData.append('email', donateInput.email);


  axios.post(`/api/store-donor`, formData).then(res=>{
      if(res.data.status === 200)
      {
          swal.fire(
            'Cảm ơn bạn đã thực hiện quyên góp!',
            'Chúng tôi đã ghi nhận thông tin',
            'success'
          )
      }
      else if(res.data.status === 422)
      {
        console.log('thất bại')
          // swal("All Fields are mandetor","","error");
      }
  });
}


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
          
        </div>

        <form onSubmit={submitDonors}>
        <fieldset className="Donate__Form__GiftFrequency__Frequency">
            <div className="Donate__Form__GiftFrequency__Frequency__RadioWrapper">
              <input
                className="Donate__Form__GiftFrequency__Frequency__RadioWrapper__Radio"
                id="monthly"
                type="radio"
                name="frequency"
                value="0"
                onChange={handleChange}
                // onChange={handleInput} checked={donateInput.frequency}
                defaultChecked
              />
              <label htmlFor="monthly">MỖI THÁNG</label>
            </div>
            <div className="Donate__Form__GiftFrequency__Frequency__RadioWrapper">
              <input
                className="Donate__Form__GiftFrequency__Frequency__RadioWrapper__Radio"
                type="radio"
                id="one-time"
                value="1"
                onChange={handleChange}
                // onChange={handleInput} checked={donateInput.frequency}
                name="frequency"
              />
              <label htmlFor="one-time">MỘT LẦN</label>
            </div>
          </fieldset>

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
                value="100"
                onClick={() => setIsMoneyOrther(false)}
                onChange={handleChangeMoney}

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
                value="200"
                onClick={() => setIsMoneyOrther(false)}
                onChange={handleChangeMoney}

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
                value="500"

                onClick={() => setIsMoneyOrther(false)}
                onChange={handleChangeMoney}

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
                value="1000"
                onClick={() => setIsMoneyOrther(false)}
                onChange={handleChangeMoney}

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
                  value={numberMoney}
                 onChange={handleChangeMoney} 
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
            name="name"
            type="text"
            id="name-input"
            placeholder="Họ và tên"
            onChange={handleInput} value={donateInput.name}
          />

          <label htmlFor="donate-email">Email:</label>
          <input
            className="Donate__Form__NameInputWrapper__NameInput"
            type="email"
            name="email"
            id="donate-email"
            placeholder="Email"
            onChange={handleInput} value={donateInput.email}
          />

          <Link to="/listdonate">
            Nhấn vào để xem danh sách các nhà hảo tâm
          </Link>
        </fieldset>
        <div className="Donate__Form__btn">
          <Button
            size="block"
            type="submit"
            animate={true}
            icon="bx bx-search"
          >
            Ủng hộ ngay
          </Button>
          
        </div>

        </form>        
      </div>
      {/* <DonationForm /> */}
    </div>
  );
};

export default Donate;
