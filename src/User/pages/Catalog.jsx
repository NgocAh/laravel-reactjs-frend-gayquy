import React, { useCallback, useState, useEffect, useRef } from "react";
import Grid from "../component/Grid";
import ProductCard from "../component/ProductCard";
import Checkbox from "../component/Checkbox";

import productData from "../assets/fake-data/products";
// import category from "../assets/fake-data/category";
import size from "../assets/fake-data/product-size";
import Button from "../component/Button";
import InfinityList from "../component/InfinityList";

const Catalog = () => {
  document.title = "Nụ Cười Sáng - Sản phẩm";
//Category
// const [categorylist, setCategorylist] = useState([]);
// useEffect(() => {
 
//   axios.get(`/api/view-category`).then((res) => {
//     if (res.status === 200) {
//       setCategorylist(res.data.category);
//     }
//   });

// }, []);
// const category =[];
// category=categorylist.map((item)=>{

//           display: {item.name},
//           categorySlug: {item.slug},
      
// });
//

  const initFilter = {
    category: [],
    
    size: [],
  };
  const productList = productData.getAllProducts();
const [products, setProducts] = useState(productList);
 const [filter, setFilter] = useState(initFilter);
 const clearFilter = () => setFilter(initFilter);
    const filterSelect = (type, checked, item) => {
      if (checked) {
        switch (type) {
          case "CATEGORY":
            setFilter({
              ...filter,
              category: [...filter.category, item.categorySlug],
            });
            break;
  
          case "SIZE":
            setFilter({ ...filter, size: [...filter.size, item.size] });
            break;
          default:
        }
      } else {
        switch (type) {
          case "CATEGORY":
            const newCategory = filter.category.filter(
              (e) => e !== item.categorySlug
            );
            setFilter({ ...filter, category: newCategory });
            break;
              
          case "SIZE":
            const newSize = filter.size.filter((e) => e !== item.size);
            setFilter({ ...filter, size: newSize });
            break;
          default:
        }
      }
    };

     const updateProducts = useCallback(() => {
       let temp = productList;

       if (filter.category.length > 0) {
         temp = temp.filter((e) => filter.category.includes(e.categorySlug));
       }

       if (filter.size.length > 0) {
         temp = temp.filter((e) => {
           const check = e.size.find((size) => filter.size.includes(size));
           return check !== undefined
         });
       }
       setProducts(temp);
     }, [filter, productList]);

     useEffect(() => {
       updateProducts();
     }, [updateProducts]);

     const filterRef = useRef(null);
     const showHideFilter = () => filterRef.current.classList.toggle("active"); //ẩn bộ lọc khi làm reponsive

  return (
    <div>
      <div className="catalog">
        <div className="catalog__filter" ref={filterRef}>
          {/* nút close danh mục khi responsive */}
          <div
            className="catalog__filter__close"
            onClick={() => showHideFilter()}
          >
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Danh mục sản phẩm
            </div>

            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <Checkbox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Kích cỡ</div>

            <div className="catalog__filter__widget__content">
              {size.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <Checkbox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="sm" onClick={clearFilter}>
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>

        <div className="catalog__filter__toggle">
          <Button size="sm" onClick={() => showHideFilter()}>
            bộ lọc
          </Button>
        </div>
        <div className="catalog__content">
          <InfinityList data={products} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
