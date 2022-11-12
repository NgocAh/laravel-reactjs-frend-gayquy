import GiftFrequency from './GiftFrequency/GiftFrequency';
import classes from './DonationForm.module.css';
import SelectAmount from './SelectAmount/SelectAmount';

import NameInput from './NameInput';
import SubmitButton from './SubmitButton';

const DonationForm = () => {
  return (
    <form className={classes.DonationForm} onSubmit={e => e.preventDefault()}>
      <GiftFrequency />
      <SelectAmount />

      <NameInput />
      <SubmitButton />
    </form>
  );
};

export default DonationForm;
