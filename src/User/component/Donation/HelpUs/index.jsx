import classes from './HelpUs.module.css';
import HelpUsTitle from './HelpUsTitle';

const HelpUs = () => {
  return (
    <section className={classes.HelpUs}>
      <HelpUsTitle />
      <p className={classes.HelpUsParagraph1}>
        Hướng đến mục tiêu mang lại giá trị tốt đẹp chong cộng đồng và xã hội. Hãy cùng Nụ Cười Sáng mang sức trẻ đi muôn nơi
        tích cực hơn.
      </p>
      <p className={classes.HelpUsParagraph2}>
        Nụ Cười Sáng nhận chuyển khoản qua:
         <p >
        - STK:16610000084260 Ngân Hàng BIDV Chi nhánh Thủ Thiêm - TRAN THI NGOC
        ANH
      </p>
      <p >
        - MOMO : 0941402932 - TRAN THI NGOC ANH
      </p>
      </p>
     
  
    </section>
  );
};

export default HelpUs;
