// import classes from './NameInput.module.css';
// import React, { useEffect, useState } from "react";
// const NameInput = () => (
 
//   <fieldset className={classes.NameInputWrapper}>
//     <label htmlFor="name-input">Họ và tên:</label>
//     <input
//       className={classes.NameInput}
//       type="text"
//       id="name-input"
//       placeholder="Nhập họ và tên"
//     />
//     <label htmlFor="name-input">Email:</label>
//     <input
//       className={classes.NameInput}
//       type="text"
//       id="name-input"
//       placeholder="Nhập email của bạn"
//     />
//     <a href="/listdonate">Nhấn vào để xem danh sách các nhà hảo tâm</a>
//   </fieldset>
// );

// export default NameInput;
import React, { useEffect, useState } from "react";
import classes from "./NameInput.module.css";
const NameInput = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

   const [f1, setF1] = useState(false);
   const [f2, setF2] = useState(false);

   const [err1, setErr1] = useState("");
   const [err2, setErr2] = useState("");

  useEffect(() => {
    if (fullname === "" && f1) {
      setErr1("Hãy nhập họ và tên");
    } else {
      setErr1("");
    }
  }, [f1, fullname]);
  useEffect(() => {
    if (email === "" && f2) {
      setErr2("Hãy nhập email");
    }
  }, [email, f2]);

  return (
    <fieldset className={classes.NameInputWrapper}>
      <label htmlFor="name-input">Họ và tên:</label>
      <input
        className={classes.NameInput}
        type="text"
        id="name-input"
        placeholder="Họ và tên"
        required
        onChange={(e) => {
          setFullname(e.target.value);
          setF1(true);
        }}
        value={fullname}
      />
      <span>{err1}</span>
      <label htmlFor="donate-email">Email:</label>
      <input
        className={classes.NameInput}
        type="email"
        id="donate-email"
        placeholder="Email"
        required
        onChange={(e) => {
          setEmail(e.target.value);
          setF2(true);
        }}
        value={email}
      />
      <span>{err2}</span>

      <a href="/listdonate">Nhấn vào để xem danh sách các nhà hảo tâm</a>
      <Link to="/donate">
        <i className="bx bx-donate-heart"></i>
      </Link>
    </fieldset>
  );
};



export default NameInput;
