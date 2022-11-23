import React from "react";

const data = [
  {
    name: "James",
    email: "james@hotmail.com",
    age: "32",
    food: "pizza",
  },
  {
    name: "Jennifer",
    email: "jennifer@hotmail.com",
    age: "23",
    food: "sushi",
  },
  {
    name: "Markus",
    email: "markus@hotmail.com",
    age: "21",
    food: "chicken parm",
  },
  {
    name: "Sarah",
    email: "sarah@hotmail.com",
    age: "30",
    food: "burritos",
  },
  {
    name: "Stella",
    email: "stella@hotmail.com",
    age: "27",
    food: "samosa",
  },
];

const ListDonate = ({ data }) => {
  document.title = "Danh sách quyên góp";
  return (
    <div className="ListDonate">
      <div className="ListDonate__tittle">
        <span>Danh sách quyên góp</span>
      </div>

      <table className="ListDonate__table">
        <thead className="ListDonate__table__thead">
          <tr className="ListDonate__table__thead__trHead">
            {/* {["#", ...keys].map((item, index) => (
            <th className={classes.th} key={index}>
              {item}
            </th>
          ))} */}
            <th className="ListDonate__table__thead__trHead__th">STT</th>
            <th className="ListDonate__table__thead__trHead__th">Họ và tên</th>
            <th className="ListDonate__table__thead__trHead__th">Email</th>
            <th className="ListDonate__table__thead__trHead__th">
              Số tiền quyên góp (ngìn VNĐ)
            </th>
            <th className="ListDonate__table__thead__trHead__th">Tần suất</th>
          </tr>
        </thead>
        <tbody className="ListDonate__table__tbody">
          {/* {data.map((obj, index) => (
          <tr className={classes.trBody} key={index}>
            <td className={classes.td}>{index + 1}</td>
            {keys.map((item, index) => {
              const value = obj[item];
              return (
                <td className={classes.td} key={index}>
                  {value}
                </td>
              );
            })}
          </tr>
        ))} */}
          <tr className="ListDonate__table__tbody__trBody">
            <td className="ListDonate__table__tbody__trBody__td">1</td>
            <td className="ListDonate__table__tbody__trBody__td">
              Trần Thị Ngọc Ánh
            </td>
            <td className="ListDonate__table__tbody__trBody__td">
              1951120083@sv.ut.edu.vn
            </td>
            <td className="ListDonate__table__tbody__trBody__td">500</td>
            <td className="ListDonate__table__tbody__trBody__td">Một lần</td>
          </tr>
          <tr className="ListDonate__table__tbody__trBody">
            <td className="ListDonate__table__tbody__trBody__td">2</td>
            <td className="ListDonate__table__tbody__trBody__td">
              Phan Thế Trung
            </td>
            <td className="ListDonate__table__tbody__trBody__td">
              1951120083@sv.ut.edu.vn
            </td>
            <td className="ListDonate__table__tbody__trBody__td">500</td>
            <td className="ListDonate__table__tbody__trBody__td">Một lần</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListDonate;
