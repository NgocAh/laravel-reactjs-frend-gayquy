import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import Button from './Button';
function CheckOrder () {
  document.title = "Trạng thái đơn hàng";
  const params = useParams();
  const [loading, setLoading] = useState(true);

  const [codeOrder,setOrderCode]=useState({
    code: '',
  });
  
  const [order,setOrder]=useState([]);
  const [orderStatus,setOrderStatus]=useState([]);

  const handleInput = (e) => {
    e.persist();
    setOrderCode({...codeOrder, [e.target.name]:e.target.value });
}
console.log('code',codeOrder.code)

  const submitSearch = (e) => {
    e.preventDefault();

    console.log(codeOrder.code)
    axios.get(`/api/check-status/${codeOrder.code}`).then(res=>{
        if(res.data.status === 200)
        {
            // swal("Success",res.data.message,"success");
            swal.fire(
              'Đã check',
              res.data.message,
              'success'
            )
            setOrder(res.data.order)
            setOrderStatus(res.data.status_code)
            setLoading(false);                   

            // setError([]);
        }
        else if(res.data.status === 422)
        {
          swal.fire(
            'Không tìm thấy vui lòng nhập lại mã!',
              res.data.error,
            'error'
          )
        }
    });
}
var trangthai="";
var display_StatusCode=""
if(loading)
{
   display_StatusCode=<h4>Vui lòng nhập code</h4>
}
else
{
  if(orderStatus===0){
    trangthai='Đặt hàng'
}if(orderStatus===1)
{
  trangthai='Đang chuẩn bị'
}if(orderStatus===2){
  trangthai='Đang giao'

}if(orderStatus===3){
  trangthai='Đã nhận hàng'
}
  display_StatusCode =  (
    <div className="CheckOrder__track__TablleCheck">
    <table className="CheckOrder__track__TablleCheck__table">
      <thead className="CheckOrder__track__TablleCheck__table__thead">
        <tr className="CheckOrder__track__TablleCheck__table__thead__trHead">
          <th className="CheckOrder__track__TablleCheck__table__thead__trHead__th">
            STT
          </th>
          <th className="CheckOrder__track__TablleCheck__table__thead__trHead__th">
            Mã đơn hàng
          </th>
          <th className="CheckOrder__track__TablleCheck__table__thead__trHead__th">
            Tình trạng đơn hàng
          </th>
        </tr>
      </thead>
      <tbody className="CheckOrder__track__TablleCheck__table__tbody">
        <tr className="CheckOrder__track__TablleCheck__table__tbody__trBody">
          <td className="CheckOrder__track__TablleCheck__table__tbody__trBody__td">
            1
          </td>
          <td className="CheckOrder__track__TablleCheck__table__tbody__trBody__td">
             {order}
          </td>
          <td className="CheckOrder__track__TablleCheck__table__tbody__trBody__td">
            {trangthai}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    )

}

  return (
    <div className="CheckOrder">
      <div className="CheckOrder__title">
        <h1>Tra cứu trạng thái đơn hàng</h1>
      </div>
      <div className="CheckOrder__track">
        <div className="CheckOrder__track__search">
        <form   onSubmit={submitSearch}  >
              <input
                className="CheckOrder__track__search__ID"
                type="text"
                name="code"
                onChange={handleInput} 
                value={codeOrder.code}
                placeholder="Nhập mã tra cứu..."
              ></input>
                <Button size="sm" animate={true} icon="bx bx-search">
            Tra cứu
          </Button>

          </form>
        
          <br></br>
        </div>
        {/* <div className="CheckOrder__track__TablleCheck">
          <table className="CheckOrder__track__TablleCheck__table">
            <thead className="CheckOrder__track__TablleCheck__table__thead">
              <tr className="CheckOrder__track__TablleCheck__table__thead__trHead">
                <th className="CheckOrder__track__TablleCheck__table__thead__trHead__th">
                  STT
                </th>
                <th className="CheckOrder__track__TablleCheck__table__thead__trHead__th">
                  Mã đơn hàng
                </th>
                <th className="CheckOrder__track__TablleCheck__table__thead__trHead__th">
                  Tình trạng đơn hàng
                </th>
              </tr>
            </thead>
            <tbody className="CheckOrder__track__TablleCheck__table__tbody">
              <tr className="CheckOrder__track__TablleCheck__table__tbody__trBody">
                <td className="CheckOrder__track__TablleCheck__table__tbody__trBody__td">
                  1
                </td>
                <td className="CheckOrder__track__TablleCheck__table__tbody__trBody__td">
                  F123
                </td>
                <td className="CheckOrder__track__TablleCheck__table__tbody__trBody__td">
                  Đã nhận hàng
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
         {display_StatusCode}
      </div>
    </div>
  );
}

export default CheckOrder