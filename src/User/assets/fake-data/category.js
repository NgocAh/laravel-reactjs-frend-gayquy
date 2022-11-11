import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

// const [categorylist, setCategorylist] = useState([]);
// function category(){
//     useEffect(() => {
 
//         axios.get(`/api/view-category`).then((res) => {
//           if (res.status === 200) {
//           //   setCategorylist(res.data.category);
//             console.log(res.data.category);
//           }else{
//             console.log('fail');
      
//           }
//         });
//       }, []);

//       return {
       
//       }

// }



const category = [
    {
        display: "Áo thun",
        categorySlug: "ao-thun"
    },
    {
        display: "Áo somi",
        categorySlug: "ao-somi"
    },
    {
        display: "Quần jean",
        categorySlug: "quan-jean"
    }
]

export default category