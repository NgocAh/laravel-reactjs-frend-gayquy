import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ListDonate () {
  document.title = "Danh sách quyên góp";
  const [loading, setLoading] = useState(true);
  const [input,setInput]=useState("");
  const [viewDonor, setDonor] = useState([])

  useEffect(() => {
    axios.get(`/api/all-donor`).then(res=>{
        if(res.data.status === 200)
        {
          setDonor(res.data.donors)
        }
        setLoading(false);
    });
}, []);
var stt=0;
var display_DonorData = "";
if(loading)
{
    return <h4>View Donor Loading...</h4>
}
else
{
    display_DonorData = viewDonor.filter((viewDonor)=>viewDonor.name.toLowerCase().includes(input)).map( (item) => {
      stt=stt+1;
      var frequency='';
      if (item.frequency==0){
          frequency='1 Tháng';
      }else{
          frequency='1 Lần';
      }
        return (
        
          <tr className="ListDonate__table__tbody__trBody">
            <td className="ListDonate__table__tbody__trBody__td">{stt}</td>
            <td className="ListDonate__table__tbody__trBody__td">
            {item.name}
            </td>
            <td className="ListDonate__table__tbody__trBody__td">
            {item.email}

            </td>
            <td className="ListDonate__table__tbody__trBody__td">{item.number_money}</td>
            <td className="ListDonate__table__tbody__trBody__td">{frequency}</td>
          </tr>
            // <tr>
            //             <th scope="row"></th>
            //             <td>{item.name}</td>
            //             <td>{frequency}</td>
            //             <td>{item.number_money}</td>
            //             <td>{status_donor}</td>
            //             <td>
            //              <Link to={`/admin/edit-donor/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                            
            //             </td>
            // </tr>
        )
    });
}
  // const keys = Object.keys(data[0]);
  return (
    <div className="ListDonate">
     <div className="row">
        {/* <label> Search:</label> */}
      <br></br>
        <input
          className="row__search"
          type="text"
          name="order"
          placeholder="Nhập tên sản phẩm..."
          onChange={(e)=> setInput(e.target.value)}
        ></input>
        <i className="bx bx-search"></i>
        <br></br>
      </div>
  
                {/* <input 
                    type="text"
                    name="order"
                    onChange={(e)=> setInput(e.target.value)}
                ></input> */}
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
         {display_DonorData}
          {/* <tr className="ListDonate__table__tbody__trBody">
            <td className="ListDonate__table__tbody__trBody__td">1</td>
            <td className="ListDonate__table__tbody__trBody__td">
              Trần Thị Ngọc Ánh
            </td>
            <td className="ListDonate__table__tbody__trBody__td">
              1951120083@sv.ut.edu.vn
            </td>
            <td className="ListDonate__table__tbody__trBody__td">500</td>
            <td className="ListDonate__table__tbody__trBody__td">Một lần</td>
          </tr> */}
         
        </tbody>
      </table>
    </div>
  );
};

export default ListDonate;