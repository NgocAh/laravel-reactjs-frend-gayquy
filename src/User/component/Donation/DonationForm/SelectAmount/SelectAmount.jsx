import { useState } from "react";
import classes from "./SelectAmount.module.css";

const SelectAmount = () => {
  const [monney100, set100] = useState("100");
  const [monney200, set200] = useState("200");
  const [monney500, set500] = useState("500");
  const [monney1000, set1000] = useState("1000");
  const [moneyOrther, setMoneyOrther] = useState("");

  const [isMoneyOrther, setIsMoneyOrther] = useState(false);
  return (
    <div className={classes.SelectAmount}>
      <header className={classes.Title}>
        <h4>Chọn số tiền muốn ủng hộ (nghìn VNĐ)</h4>
      </header>
      <fieldset className={classes.Amounts}>
        <div className={classes.RadioWrapper}>
          <input
            defaultChecked
            className={classes.Radio}
            type="radio"
            name="amount"
            id="100"
            value={monney100}
            onChange={(e) => set100(e.target.value)}
          />
          <label htmlFor="100">100</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type="radio"
            name="amount"
            id="200"
            value={monney200}
            onChange={(e) => set200(e.target.value)}
          />
          <label htmlFor="200">200</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type="radio"
            name="amount"
            id="500"
            value={monney500}
            onChange={(e) => set500(e.target.value)}
          />
          <label htmlFor="500">500</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type="radio"
            name="amount"
            id="1000"
            value={monney1000}
            onChange={(e) => set1000(e.target.value)}
          />
          <label htmlFor="1000">1000</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type="radio"
            name="amount"
            id="other"
            onClick={() => setIsMoneyOrther(true)}
          />
          <label htmlFor="other">Khác</label>
        </div>

        {isMoneyOrther ? (
          <div className={classes.RadioWrapper__MoneyOrther}>
            <input
              defaultChecked
              className={classes.Radio__MoneyOrther}
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
  );
};

export default SelectAmount;
