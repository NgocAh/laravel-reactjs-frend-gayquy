import { useState } from "react";
import classes from "./SelectAmount.module.css";

const SelectAmount = () => {
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
          />
          <label htmlFor="100">100</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type="radio"
            name="amount"
            id="200"
          />
          <label htmlFor="200">200</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type="radio"
            name="amount"
            id="500"
          />
          <label htmlFor="500">500</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type="radio"
            name="amount"
            id="1000"
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

        {/* <input
            className={classes.MonneyInput}
            type="text"
            id="monney-input"
            placeholder="Nhập số tiền:"
          /> */}
      </fieldset>
    </div>
  );
};

export default SelectAmount;
