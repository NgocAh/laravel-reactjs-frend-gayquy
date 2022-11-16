import classes from './GiftFrequency.module.css';

const GiftFrequency = () => {
  return (
    <div className={classes.GiftFrequency}>
      <header className={classes.Title}>
        <h4>Tần suất hỗ trợ</h4>
      </header>
      <fieldset className={classes.Frequency}>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            id='monthly'
            type='radio'
            name='Frequency'
            defaultChecked
          />
          <label htmlFor='monthly'>MỖI THÁNG</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input
            className={classes.Radio}
            type='radio'
            id='one-time'
            name='Frequency'
          />
          <label htmlFor='one-time'>MỘT LẦN</label>
        </div>
      </fieldset>
    </div>
  );
};

export default GiftFrequency;
