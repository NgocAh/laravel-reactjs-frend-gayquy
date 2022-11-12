import React from "react";
import DonationForm from '../component/Donation/DonationForm'
import HelpUs from "../component/Donation/HelpUs";

const Donate = () => {
  document.title = "Quyên góp";
  return (
    <div className="Donate">
      <HelpUs />
      <DonationForm />
    </div>
  );
};

export default Donate;
